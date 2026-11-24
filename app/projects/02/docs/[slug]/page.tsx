import { notFound } from 'next/navigation';
import { Project02Document, validSlugs } from '../../project-document';
export function generateStaticParams(){return validSlugs.filter(s=>s!=='readme').map(slug=>({slug}));}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!validSlugs.includes(slug))notFound();return <Project02Document slug={slug}/>;}
