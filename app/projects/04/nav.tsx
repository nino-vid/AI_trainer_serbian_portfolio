import Link from 'next/link';import styles from './project04.module.css';
const links=[['README','/projects/04'],['Tasks & Media','/projects/04/tasks'],['Model Responses','/projects/04/responses'],['Evaluations','/projects/04/evaluations'],['My Review','/projects/04/human-review'],['Error Analysis','/projects/04/error-analysis']];
export default function Nav(){return <nav className={styles.nav}>{links.map(([label,url])=><Link key={url} href={url}>{label}</Link>)}</nav>}
