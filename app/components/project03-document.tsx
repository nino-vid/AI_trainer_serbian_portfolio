import React from 'react';
import ReactMarkdown from 'react-markdown';

const samples = [
 ['SRB-AVE-001','Everyday Speech','4.0/5'],
 ['SRB-AVE-002','Lexical Stress','4.0/5'],
 ['SRB-AVE-003','Question Intonation','4.5/5'],
 ['SRB-AVE-004','Emotional Delivery','4.0/5'],
 ['SRB-AVE-005','Sarcasm','3.5/5'],
 ['SRB-AVE-006','Numbers & Dates','4.5/5'],
 ['SRB-AVE-007','Abbreviations','4.5/5'],
 ['SRB-AVE-008','Regional Expressions','4.0/5'],
 ['SRB-AVE-009','Complex Sentence Rhythm','5.0/5'],
 ['SRB-AVE-010','Pauses & Punctuation','3.0/5'],
 ['SRB-AVE-011','Serbian Phonemes','4.5/5'],
 ['SRB-AVE-012','Foreign Names','4.5/5'],
 ['SRB-AVE-013','Formal Announcement','4.5/5'],
 ['SRB-AVE-014','Customer Support','3.5/5'],
 ['SRB-AVE-015','Long-Form Naturalness','3.5/5'],
];

function ScoresTable({analysis}:{analysis:boolean}) {
 return <div className="project03-scores-scroll"><table className="project03-scores"><thead><tr><th>Sample</th><th>{analysis?'Test category':'Evaluation task'}</th><th>{analysis?'Overall score':'Score'}</th></tr></thead><tbody>{samples.map(([id,category,score])=><tr key={id}><td>{id}</td><td>{category}</td><td>{score}</td></tr>)}</tbody></table></div>;
}

export default function Project03Document({content}:{content:string}) {
 // Render the score table as real JSX, independent of malformed Markdown formatting.
 // Remove the entire original score-table block, including broken separator rows.
 const lines=content.replace(/\r/g,'').split('\n');
 const start=lines.findIndex(line=>/^\s*\|\s*\*{0,2}Sample\*{0,2}\s*\|/i.test(line));
 const analysis=start>=0 && /Test category|Overall score/i.test(lines[start]);
 let before=content, after='';
 if(start>=0){
  let end=start+1;
  // Consume table lines and accidental one-cell fragments, up to the next prose/heading.
  while(end<lines.length){
   const t=lines[end].trim();
   if(/^#{1,6}\s/.test(t))break;
   if(t && !/^\|/.test(t) && !/^SRB-AVE-\d{3}$/.test(t) &&
      !samples.some(s=>t===s[1] || t===s[2]))break;
   end++;
  }
  before=lines.slice(0,start).join('\n');
  after=lines.slice(end).join('\n');
 }
 return <div className="doc markdown project03-document">
  <style>{`.project03-document .project03-scores-scroll{width:fit-content;max-width:100%;overflow-x:auto;margin:18px 0 28px}.project03-document .project03-scores{width:auto!important;min-width:0!important;max-width:none;table-layout:auto;border-collapse:collapse;display:table}.project03-document .project03-scores th,.project03-document .project03-scores td{padding:9px 16px;border-bottom:1px solid #e5e7eb;text-align:left;white-space:nowrap}.project03-document .project03-scores th{background:#f5f5f5;font-weight:600}.project03-document .project03-scores td:last-child{text-align:right}.project03-document .project03-scores tr:last-child td{border-bottom:0}`}</style>
  <ReactMarkdown>{before}</ReactMarkdown>
  {start>=0&&<ScoresTable analysis={analysis}/>}
  <ReactMarkdown>{after}</ReactMarkdown>
 </div>;
}
