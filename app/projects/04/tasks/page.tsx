import fs from 'node:fs';
import path from 'node:path';
import styles from '../project04.module.css';
const names=['kitchen','shelf','street','menu','Pedestrian-Crossing','Coffee-Preparation','Traffic-Intersection'];
const titles=['Kitchen: Object Identification & Counting','Shelf: Object Tagging & Spatial Relations','Street: Visual Reasoning & Hallucination Detection','Café Menu: OCR & Text Understanding','Pedestrian Crossing: Video Annotation & Temporal Reasoning','Coffee Preparation: Action Recognition & Temporal Reasoning','Traffic Intersection: Vehicle Tracking & Temporal Reasoning'];
const prompts=[
'Analyze the kitchen photograph. Identify clearly visible objects and their counts. Describe their arrangement and spatial relationships (left, right, above, below, in front of). Flag partially occluded or unclear objects. Do not invent details that cannot be verified.',
'Analyze the shelf photograph. Identify and count objects on each shelf level. Describe their positions from left to right and their spatial relationships. Distinguish books, DVDs, CDs, decorative objects, and other categories only when recognizable. Flag uncertain identifications.',
'Analyze the street photograph. Identify people, vehicles, objects, and traffic infrastructure. Describe their positions, visible activities, and spatial relationships. Count only what can be counted reliably. Distinguish visible facts from assumptions.',
'Read the café menu in the photograph. Transcribe the café name, categories, products, sizes, prices, currency, and additional options. Identify the cheapest and most expensive drink with a known base price, and calculate the total cost of the two cheapest different drinks. Do not invent unreadable text; flag uncertainty.',
'Analyze the pedestrian-crossing video. Describe the setting and relevant objects; identify and count people and vehicles; describe actions chronologically; provide approximate timestamps for important events; explain spatial relationships and flag uncertain observations. Do not invent details.',
'Analyze the coffee-preparation video. Identify relevant objects, people, and actions. Describe the process chronologically, with approximate start and end timestamps for visible actions. Explain any visible changes in the drink and spatial relationships between the cup, pitcher, and hands. State which steps cannot be confirmed. Do not assume unseen steps.',
'Analyze the traffic-intersection video. Identify and count road users without double-counting. Describe events chronologically with approximate timestamps, spatial relationships, and uncertainties.'
];
export default function Page(){
 const dir=path.join(process.cwd(),'data/project-04');
 const tasks=fs.readFileSync(path.join(dir,'tasks.jsonl'),'utf8').trim().split(/\r?\n/).map((x:string)=>JSON.parse(x));
 return <><h1>Tasks & Original Media</h1><p className={styles.lead}>Seven multimodal evaluation tasks: four images and three videos.</p>
 {tasks.map((t:any,i:number)=>{const name=names[i];const video=i>=4;const src='/media/project-04/'+(video?'videos/':'images/')+name+(video?'.mp4':'.avif');return <section className={styles.task} key={t.task_id||i}><h2>{titles[i]}</h2>{video?<video className={styles.media} controls preload="metadata" src={src}/>:<img className={styles.media} src={src} alt={titles[i]}/>}<p><strong>Prompt:</strong></p><p>{prompts[i]}</p><p><strong>Evaluation targets:</strong> {(t.evaluation_targets||[]).join(', ')}</p></section>})}</>;
}
