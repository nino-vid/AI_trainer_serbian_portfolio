import Link from 'next/link';import Nav from './nav';
export default function Layout({children}:{children:React.ReactNode}){return <><div className="breadcrumbs"><Link href="/">Projects</Link> / Project 04</div><Nav/><div style={{paddingBottom:96}}>{children}</div></>}
