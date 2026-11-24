import Link from 'next/link';
import fs from 'node:fs';
import path from 'node:path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { ReactNode } from 'react';

const files: Record<string,{name:string;label:string}> = {
  readme:{name:'README.md',label:'Overview'},prompts:{name:'prompts.jsonl',label:'Prompts'},
  responses:{name:'responses.jsonl',label:'Responses'},evaluations:{name:'evaluations.jsonl',label:'Evaluations'},
  corrections:{name:'correction_dataset.jsonl',label:'Correction dataset'},
  'evaluation-guidelines':{name:'evaluation_guidelines.md',label:'Evaluation guidelines'},
  'qa-guidelines':{name:'qa_guidelines.md',label:'QA guidelines'},
};
export const validSlugs=Object.keys(files);
const folder=path.join(process.cwd(),'data/project-02');
const raw=(slug:string)=>fs.readFileSync(path.join(folder,files[slug].name),'utf8').replace(/\r\n/g,'\n');
const md=(source:string)=><div className="doc markdown p02-markdown"><ReactMarkdown remarkPlugins={[remarkGfm]}>{source}</ReactMarkdown></div>;
const promptTitlePattern=/^\s*(\d{1,2})\s*\.\s*(SRB-EVR-\d{3})\s*[-–—]\s*([^\n]+)/gm;
const categoryPattern=/^\s*\*{2,3}\s*(?:Category\s*\d+\s*[-–—]\s*)?([^*\n]+?)\s*\*{2,3}\s*$/gm;
const parseEntries=(source:string)=>{
  const matches=[...source.matchAll(/^\s*(\d{1,2})\s*\.\s*(?=\S|\n)/gm)].filter(m=>Number(m[1])>=1&&Number(m[1])<=40);
  // A new task must start at the beginning of a line, and the number must follow the prior task.
  const ordered:typeof matches=[];
  for(const m of matches) if(Number(m[1])===ordered.length+1)ordered.push(m);
  return ordered.map((m,i)=>({n:Number(m[1]),text:source.slice(m.index!+m[0].length,ordered[i+1]?.index??source.length).trim()}));
};
const getPromptTitles=()=>{
  const source=raw('prompts');return new Map([...source.matchAll(promptTitlePattern)].map(m=>[Number(m[1]),m[3].trim()]));
};
const titleFor=(n:number,titles:Map<number,string>)=>`SRB-EVR-${String(n).padStart(3,'0')}${titles.has(n)?` — ${titles.get(n)}`:''}`;
function Entry({title,children}:{title:string;children:ReactNode}){return <article className="p02-entry"><h2>{title}</h2>{children}</article>}
function tableBlock(lines:string[]){return ['| '+lines[0].split('|').map(s=>s.trim()).filter(Boolean).join(' | ')+' |','| '+lines[0].split('|').map(()=> '---').slice(1,-1).join(' | ')+' |',...lines.slice(1).map(line=>'| '+line.split('|').map(s=>s.trim()).filter(Boolean).join(' | ')+' |')].join('\n');}
function normalizeSimpleTables(source:string){
  // Normalize pipe tables and discard separator rows from the original text.
  const lines=source.split('\n');const output:string[]=[];
  const cells=(line:string)=>line.trim().replace(/^\|/,'').replace(/\|$/,'').split('|').map(x=>x.trim());
  const isSeparator=(line:string)=>{const parts=cells(line);return parts.length>1&&parts.every(x=>/^:?-{3,}:?$/.test(x));};
  for(let i=0;i<lines.length;i++){
    const line=lines[i].trim();
    if(isSeparator(line)){continue;}
    if(!line.includes('|')){output.push(lines[i]);continue;}
    const header=cells(line);
    if(header.length<2){output.push(lines[i]);continue;}
    let j=i+1;const rows:string[][]=[];
    while(j<lines.length){
      const next=lines[j].trim();
      if(!next){j++;continue;}
      if(isSeparator(next)){j++;continue;}
      if(!next.includes('|')||/^#{1,6}\s/.test(next)||/^\*\*/.test(next))break;
      const values=cells(next);
      if(values.length!==header.length)break;
      rows.push(values);j++;
    }
    if(rows.length){
      output.push('| '+header.join(' | ')+' |','| '+header.map(()=>'---').join(' | ')+' |',...rows.map(row=>'| '+row.join(' | ')+' |'));
      i=j-1;
    }else output.push(lines[i]);
  }
  return output.join('\n');
}
function normalizeReadme(source:string){
  let s=source.replace(/The evaluator has confirmed the proposed correction set[\s\S]*?See \[`correction_dataset\.jsonl`\] and \[`correction_review_sheet\.md`\]\.\s*/,'');
  
  // Remove filename extensions from visible tree only; keep the underlying source files intact.
  s=s.replace(/(├── |└── )([^\n#]+?)(\.jsonl|\.md)(\s*#)/g,'$1$2$4');
  // Keep commentary outside tables and link to the actual local documentation route.
  s=s.replace(/Each dimension uses a \*\*1–5 scale\*\*[\s\S]*?choosing a preferred model first\./, '');
  s=s.replace(/^The complete proposed scoring rules[^\n]*$/gm, '');
  s=s.replace(/^Further examples and recommendations are included in[^\n]*$/gm, '');
  const navigationTree = [
    '```text',
    'Project-02-LLM-Evaluation/',
    '│',
    '├── README                 # Project overview and methodology',
    '├── Prompts                # 40 original Serbian evaluation tasks',
    '├── Responses              # Original Gemini and Grok responses',
    '├── Evaluations            # Model scores, comparisons and feedback',
    '├── Correction Dataset     # 15 corrected responses with explanations',
    '├── Evaluation Guidelines  # Evaluation criteria and scoring methodology',
    '└── QA Guidelines          # Quality assurance rules and error categories',
    '```',
  ].join('\n');
  s=s.replace(/Project-02-LLM-Evaluation\/\r?\n(?:[├└]──[^\n]*\r?\n)+/, navigationTree+'\n');
  s=normalizeSimpleTables(s);
  return s;
}
function Prompts({source}:{source:string}){
 const entries=[...source.matchAll(promptTitlePattern)];
 const categories=[...source.matchAll(categoryPattern)].map(m=>({index:m.index!,name:m[1].trim()}));
 return <div className="p02-content"><p className="p02-intro">Original Serbian-language tasks and their evaluation criteria.</p>{entries.map((m,i)=>{
  const body=source.slice(m.index!+m[0].length,entries[i+1]?.index??source.length);
  const cat=categories.filter(c=>c.index<m.index!).at(-1),prev=entries[i-1],prevCat=prev&&categories.filter(c=>c.index<prev.index!).at(-1);
  const crit=body.match(/Kriterijumi\s*:\s*([\s\S]*)/i);
  const prompt=body.split(/Kriterijumi\s*:/i)[0].replace(/^\s*Prompt\s*:\s*/i,'').replace(/^\s*\*{2,3}[^\n]+\*{2,3}\s*$/gm,'').trim().replace(/^"|"$/g,'');
  return <div key={m[2]}>{cat&&(!prev||cat.index!==prevCat?.index)&&<h2 className="p02-category">{cat.name}</h2>}<Entry title={`${m[2]} — ${m[3].trim()}`}><div className="p02-field"><strong>Prompt</strong><p>{prompt}</p></div>{crit&&<div className="p02-field"><strong>Criteria</strong><p>{crit[1].replace(/^\s*\*{2,3}[^\n]+\*{2,3}\s*$/gm,'').trim()}</p></div>}</Entry></div>;
 })}</div>;
}
function Responses({source}:{source:string}){
 const titles=getPromptTitles();
 return <div className="p02-content"><p className="p02-intro">Original model responses from Gemini and Grok.</p>{parseEntries(source).map(({n,text})=>{
  const parts=[...text.matchAll(/^(Grok|Gemini)\s*:\s*/gmi)];
  const items=parts.map((m,i)=>({name:m[1],content:text.slice(m.index!+m[0].length,parts[i+1]?.index??text.length).trim()}));
  return <Entry key={n} title={titleFor(n,titles)}><div className="p02-model-grid">{items.map((item,i)=>{const content=n===1?item.content.replace(/^\s*(?:grok\/english|chatGPT\/english)\s*:?[^\n]*$/gmi,'').trim():item.content;return <section className="p02-model" key={i}><h3>{item.name}</h3><p>{content}</p></section>})}</div></Entry>;
 })}</div>;
}
function Evaluations({source}:{source:string}){const titles=getPromptTitles();return <div className="p02-content">{parseEntries(source).map(({n,text})=><Entry key={n} title={titleFor(n,titles)}><div className="p02-prose">{text.split(/\n\s*\n/).filter(Boolean).map((p,i)=><p key={i}>{p.trim()}</p>)}</div></Entry>)}</div>}
function Guidelines({source}:{source:string}){
 const titles=getPromptTitles();
 return <div className="p02-content">{parseEntries(source).map(({n,text})=>{
   const meta=(key:string)=>text.match(new RegExp('"'+key+'"\\s*:\\s*"([^\"]*)"'))?.[1];
   const models=[...text.matchAll(/"(Gemini|Grok)"\s*:\s*\{([^{}]*)\}/g)].slice(0,2).map(m=>({model:m[1],scores:[...m[2].matchAll(/"([^\"]+)"\s*:\s*(\d+)/g)].map(x=>({name:x[1],score:x[2]}))}));
   const preferred=meta('preferred_model')??meta('preferred_response')??'Not recorded';

   return <Entry key={n} title={titleFor(n,titles)}><div className="p02-meta"><span><strong>Evaluator:</strong> {meta('evaluator_id')??'—'}</span><span><strong>Preferred model:</strong> {preferred.toLowerCase()==='tie'?'Tie':preferred}</span><span><strong>Preference strength:</strong> {meta('preference_strength')??'—'}</span></div>{models.length>0&&<div className="table-wrap"><table><thead><tr><th>Criterion</th>{models.map(m=><th key={m.model}>{m.model}</th>)}</tr></thead><tbody>{[...new Set(models.flatMap(m=>m.scores.map(s=>s.name)))].map(key=><tr key={key}><td>{key.replaceAll('_',' ')}</td>{models.map(m=><td key={m.model}>{m.scores.find(s=>s.name===key)?.score??'—'}</td>)}</tr>)}</tbody></table></div>}</Entry>;
 })}</div>;
}
function normalizeQa(source:string){
  // The source contains pipe-separated rows without GFM header separators.
  // Build the three real tables explicitly, leaving surrounding notes as prose.
  let s=source.replace(/^\*\*Related project files:\*\*[^\n]*$/gm,'');
  const tables=[
    {start:'| Dimension | What to check | Typical reason to reduce a score',cols:3},
    {start:'| Score | Definition |',cols:2},
    {start:'| Category code | Meaning | Example or review signal',cols:3},
  ];
  for(const {start,cols} of tables){
    const lines=s.split('\n');
    const begin=lines.findIndex(line=>line.trim()===start);
    if(begin<0)continue;
    let end=begin+1;
    while(end<lines.length){
      const line=lines[end].trim();
      if(line.startsWith('**')||line.startsWith('#'))break;
      if(line===''||line.startsWith('|')||line.startsWith('`')){end++;continue;}
      break;
    }
    const header=start.split('|').map(x=>x.trim()).filter(Boolean);
    const rows=lines.slice(begin+1,end).filter(line=>line.trim()&&!/^\|?\s*:?-{3,}/.test(line.trim())).map(line=>line.split('|').map(x=>x.trim()).filter(Boolean)).filter(parts=>parts.length===cols);
    const table=['| '+header.join(' | ')+' |','| '+header.map(()=>'---').join(' | ')+' |',...rows.map(row=>'| '+row.join(' | ')+' |')].join('\n');
    lines.splice(begin,end-begin,table,'');
    s=lines.join('\n');
  }
  s=s.replace(/^(\*\*(?:Scoring anchor[^\n]*|Total:|Category consistency:)[^\n]*$)/gm,'\n\n$1\n\n');
  return s;
}
function Corrections({source}:{source:string}){
 let s=source.replace(/_Counting rule for the final report_[\s\S]*$/i,'');
 s=s.replace(/^([^\n]+ — Error Analysis Report)\n(Project: [^\n]+)\n(Language: [^\n]+)\n(Models used[^\n]+)\n(Author\/evaluator: [^\n]+)/,(_m,title,project,language,models,author)=>`# ${title}\n\n**${project}**  \n**${language}**  \n**${models}**  \n**${author}**`);
 s=s.replace(/^(\d+)\.\s+(Purpose|Source materials and limits|Preliminary findings|Proposed taxonomy for annotation)\s*$/gm,'## $1. $2');
 s=s.replace(/^([A-I])\.\s+([^\n]+)$/gm,'### $1. $2');
 s=s.replace(/^(SRB-EVR-\d{3}\s*[-–—]\s*[^.\n]+)\./gm,'**$1.**');
 s=s.replace(/^Important limitations:/gm,'**Important limitations:**');
 s=s.replace(/^Code \/ Category \/ When to use it\s*$/gm,'');
 return md(normalizeSimpleTables(s));
}
export function Project02Document({slug}:{slug:string}){
 const selected=files[slug];const source=raw(slug);
 return <><div className="breadcrumbs"><Link href="/">Projects</Link> / <Link href="/projects/02">Project 02</Link>{slug!=='readme'&&` / ${selected.label}`}</div><nav className="subnav p02-nav" aria-label="Project 02 sections">{validSlugs.map(key=><Link key={key} className={key===slug?'p02-active':''} href={key==='readme'?'/projects/02':`/projects/02/docs/${key}`}>{files[key].label}</Link>)}</nav><div className="page-title p02-title"><h1>{slug==='readme'?'Serbian LLM Response Evaluation':selected.label}</h1></div>{slug==='readme'&&md(normalizeReadme(source))}{slug==='prompts'&&<Prompts source={source}/>}{slug==='responses'&&<Responses source={source}/>}{slug==='evaluations'&&<Evaluations source={source}/>}{slug==='corrections'&&<Corrections source={source}/>}{slug==='evaluation-guidelines'&&<Guidelines source={source}/>}{slug==='qa-guidelines'&&md(normalizeQa(source))}</>;
}
