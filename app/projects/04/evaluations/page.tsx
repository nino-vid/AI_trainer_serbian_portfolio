import fs from 'node:fs';
import path from 'node:path';
import Project04Document from '../document';
import styles from '../project04.module.css';
const labels: Record<string,string> = {kitchen:'Kitchen',shelf:'Shelf',street:'Street','cafe-menu':'Café Menu'};
const videos = [
 {file:'video-review-005.md', title:'Pedestrian Crossing', focus:'Video Annotation & Temporal Reasoning'},
 {file:'video-review-006.md', title:'Coffee Preparation', focus:'Action Recognition & Temporal Reasoning'},
 {file:'video-review-007.md', title:'Traffic Intersection', focus:'Vehicle Tracking & Temporal Reasoning'}
];
const pretty = (s:string)=>s.replace(/_/g,' ');
export default function Page(){
 const dir=path.join(process.cwd(),'data/project-04');
 const rows=fs.readFileSync(path.join(dir,'evaluations.jsonl'),'utf8').trim().split(/\r?\n/).filter(Boolean).map((line:string)=>JSON.parse(line));
 return <><h1>Evaluations</h1><h2>Image Tasks</h2>
 {rows.map((r:any)=><section className={styles.task} key={r.task_id}>
 <h3>{labels[r.task_id]||r.task_id}</h3>
 <p><strong>Reviewer:</strong> Nino</p><p><strong>Model:</strong> {r.model_name||'ChatGPT'}</p>
 <h4 className={styles.reviewHeading}>Review notes</h4><p>{r.review_notes||'No written review notes available.'}</p>
 {r.error_categories?.length>0&&<><h4 className={styles.reviewHeading}>Identified issues</h4><div className={styles.tags}>{r.error_categories.map((v:string)=><span className={styles.tag} key={v}>{pretty(v)}</span>)}</div></>}
 </section>)}
 <h2>Video Tasks</h2>
 {videos.map(v=><section className={styles.task} key={v.file}>
 <h3>{v.title}</h3><p><strong>Reviewer:</strong> Nino</p><p><strong>Model:</strong> ChatGPT</p>
 <p><strong>Evaluation focus:</strong> {v.focus}</p>
 <h4 className={styles.reviewHeading}>Review notes and my corrections</h4>
 <Project04Document source={fs.readFileSync(path.join(dir,v.file),'utf8').replace(/^#.*\n/gm,'').replace(/\*\*(?:Qualitative severity|Severity|Scoring):\*\*[^\n]*/gi,'')}/>
 </section>)}
 </>;
}
