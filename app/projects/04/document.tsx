import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './project04.module.css';
function cells(line:string){return line.trim().replace(/^\|/,'').replace(/\|$/,'').split('|').map(x=>x.trim());}
function isSeparator(line:string){return /^\s*\|?\s*:?-{2,}:?\s*(?:\|\s*:?-{2,}:?\s*)+\|?\s*$/.test(line);}
export default function Project04Document({source}:{source:string}){
 const cleaned=source.replace(/\*\*review status:\*\*[^\n]*/gi,'').replace(/\*\*reference verification:\*\*[^\n]*/gi,'').replace(/^.*(?:Severity is provisional pending final human rating\.|No numeric rating assigned\.|Scores pending human approval\.|Qualitative assessment\.).*$/gim,'');const lines=cleaned.replace(/\r/g,'').split('\n');const parts:React.ReactNode[]=[];let plain:string[]=[];
 const flush=()=>{if(plain.length){const text=plain.join('\n').trim();if(text)parts.push(<ReactMarkdown key={'p'+parts.length}>{text}</ReactMarkdown>);plain=[];}};
 for(let i=0;i<lines.length;){const line=lines[i];
 if(line.startsWith('```')){flush();const chunk:string[]=[];i++;while(i<lines.length&&!lines[i].startsWith('```'))chunk.push(lines[i++]);i++;parts.push(<pre key={'c'+parts.length} className={styles.tree}><code>{chunk.join('\n')}</code></pre>);continue;}
 if(line.trim().startsWith('|')&&i+1<lines.length&&isSeparator(lines[i+1])){
 flush();const headers=cells(line);i+=2;const rows:string[][]=[];
 while(i<lines.length){if(!lines[i].trim()){i++;if(i<lines.length&&lines[i].trim().startsWith('|'))continue;break;}if(!lines[i].trim().startsWith('|'))break;if(isSeparator(lines[i])){i++;continue;}const row=cells(lines[i]);if(row.length===headers.length&&row.some(Boolean))rows.push(row);i++;}
 parts.push(<div key={'t'+parts.length} className={styles.tablewrap}><table className={styles.table}><thead><tr>{headers.map((v,j)=><th key={j}>{v}</th>)}</tr></thead><tbody>{rows.map((r,k)=><tr key={k}>{r.map((v,j)=><td key={j}><ReactMarkdown>{v}</ReactMarkdown></td>)}</tr>)}</tbody></table></div>);continue;
 }
 // timestamp sequences: separate readable timeline
 if(/^\s*[-*]\s+\*\*\d\d:\d\d[–-]/.test(line)){flush();const chunk:string[]=[];while(i<lines.length&&/^\s*[-*]\s+\*\*\d\d:\d\d[–-]/.test(lines[i]))chunk.push(lines[i++].replace(/^\s*[-*]\s+/,''));parts.push(<ul className={styles.timeline} key={'l'+parts.length}>{chunk.map((v,j)=><li key={j}><ReactMarkdown>{v}</ReactMarkdown></li>)}</ul>);continue;}
 plain.push(line);i++;
 }
 flush();return <div className={styles.doc}>{parts}</div>;
}
