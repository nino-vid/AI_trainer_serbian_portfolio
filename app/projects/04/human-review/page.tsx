import fs from 'node:fs';import path from 'node:path';import Project04Document from '../document';
export default function Page(){const source=fs.readFileSync(path.join(process.cwd(),'data/project-04/human-review.md'),'utf8');return <><h1>My Review</h1><Project04Document source={source}/></>}
