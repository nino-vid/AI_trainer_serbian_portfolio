import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
export const metadata: Metadata = { title: 'Serbian AI Evaluation Portfolio', description: 'Four human-led Serbian AI evaluation projects' };
export default function Layout({children}:{children:React.ReactNode}) {return <html lang="en"><body><header className="site-header"><div className="shell header-inner"><Link className="brand" href="/">AI Evaluation Portfolio</Link><nav><Link href="/">All projects</Link></nav></div></header><main className="shell">{children}</main></body></html>;}
