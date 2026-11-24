import Link from 'next/link';
import fs from 'node:fs';
import path from 'node:path';
import {notFound} from 'next/navigation';
import Project03Document from '../../../components/project03-document';
const dir=path.join(process.cwd(),'data/project-03');
const sections:{[key:string]:{title:string;file?:string}}={tasks:{title:'Tasks',file:'tasks.md'},evaluations:{title:'Evaluations'},'error-analysis':{title:'Error analysis',file:'error_analysis_report.md'}};
type Evaluation={sample_id:string;test_category?:string;score?:number;strengths?:string[];issues?:string[];severity?:unknown};
export function generateStaticParams(){return Object.keys(sections).map(section=>({section}));}
export default async function Project03Section({params}:{params:Promise<{section:string}>}){
 const {section}=await params;const config=sections[section];if(!config)notFound();
 let audioFiles:string[]=[];const publicAudio=path.join(process.cwd(),'public/media/project-03');
 const localAudio=path.join(dir,'audio-files');
 if(fs.existsSync(publicAudio))audioFiles=fs.readdirSync(publicAudio).filter(f=>/\.mp3$/i.test(f));
 else if(fs.existsSync(localAudio))audioFiles=fs.readdirSync(localAudio).filter(f=>/\.mp3$/i.test(f));
 const items:Evaluation[]=section==='evaluations'?fs.readFileSync(path.join(dir,'evaluations.jsonl'),'utf8').trim().split(/\r?\n/).filter(Boolean).map(x=>JSON.parse(x)):[];
 return <><div className="breadcrumbs"><Link href="/">Projects</Link> / <Link href="/projects/03">Project 03</Link> / {config.title}</div>
 <nav className="subnav" aria-label="Project 03 navigation"><Link href="/projects/03">README</Link><Link href="/projects/03/tasks">Tasks</Link><Link href="/projects/03/evaluations">Evaluations</Link><Link href="/projects/03/error-analysis">Error analysis</Link></nav>
 <div className="page-title"><h1>{config.title}</h1></div>
 {section==='evaluations'?<section><p className="muted">Listen to the original recording and review the human evaluation for each sample.</p>{items.map(x=>{const file=audioFiles.find(f=>f.startsWith(x.sample_id));return <article className="evaluation" key={x.sample_id}><div className="detail-heading"><h3>{x.sample_id} — {x.test_category}</h3><strong>{x.score}/5</strong></div>{file?<audio controls preload="none" src={'/media/project-03/'+encodeURIComponent(file)}/>:<p className="muted">Audio unavailable in public/media/project-03.</p>}<h4>Strengths</h4><ul>{x.strengths?.map((v,i)=><li key={i}>{v}</li>)}</ul><h4>Issues</h4><ul>{x.issues?.map((v,i)=><li key={i}>{v}</li>)}</ul><p><strong>Severity:</strong> {typeof x.severity==='string'?x.severity:JSON.stringify(x.severity)}</p></article>})}</section>:<Project03Document content={fs.readFileSync(path.join(dir,config.file!),'utf8')}/>}
 </>;
}
