import fs from 'node:fs';import path from 'node:path';
const dir=path.join(process.cwd(),'data','project-01');
export type Segment={segment_id:string;turn_id:number;speaker_id:string|null;timestamps?:{start_ms:number;end_ms:number};verbatim_acoustic?:string;normalized_orthographic?:string;reconstructed_speech?:string;standard_serbian_paraphrase?:string;english_literal_translation?:string;english_localization_proposed?:string;annotation_tags?:Record<string,unknown>;qa_notes?:string[];review_status?:string;segment_type?:string;[key:string]:unknown};
export function getProject(){const raw=JSON.parse(fs.readFileSync(path.join(dir,'MRK_portfolio_v1.2.json'),'utf8'));return {name:raw.dataset_name,sample:raw.data_samples[0],segments:raw.data_samples[0].annotations as Segment[]};}
export function getDocument(name:'README.md'|'MRK_ANNOTATION_GUIDELINES_v1.1.md'|'MRK_QA_CHANGELOG_v1.2.md'){return fs.readFileSync(path.join(dir,name),'utf8');}
export function time(ms?:number){if(ms==null)return '—';return `${Math.floor(ms/60000).toString().padStart(2,'0')}:${(Math.floor(ms/1000)%60).toString().padStart(2,'0')}.${(ms%1000).toString().padStart(3,'0')}`;}
