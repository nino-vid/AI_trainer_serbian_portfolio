import fs from 'node:fs';import path from 'node:path';import Project04Document from './document';
export default function Page(){const source=fs.readFileSync(path.join(process.cwd(),'data/project-04/README.md'),'utf8');return <><div className="page-title"><h1>Serbian Multimodal Annotation & QA</h1><p>Four image and three video evaluation tasks.</p></div><Project04Document source={source}/></>}
