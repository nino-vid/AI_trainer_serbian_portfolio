import Link from 'next/link';
import fs from 'node:fs';
import path from 'node:path';
import Project03Document from '../../components/project03-document';
const dir=path.join(process.cwd(),'data/project-03');
export default function Project03(){
 const readme=fs.readFileSync(path.join(dir,'README.md'),'utf8');
 return <><div className="breadcrumbs"><Link href="/">Projects</Link> / Project 03</div>
 <nav className="subnav" aria-label="Project 03 navigation"><Link href="/projects/03">README</Link><Link href="/projects/03/tasks">Tasks</Link><Link href="/projects/03/evaluations">Evaluations</Link><Link href="/projects/03/error-analysis">Error analysis</Link></nav>
 <div className="page-title"><h1>Serbian AI Voice Evaluation</h1><p>15 Serbian text-to-speech samples generated with ElevenLabs, reviewed for pronunciation, intonation, rhythm and naturalness.</p></div>
 <Project03Document content={readme}/></>;
}
