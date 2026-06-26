import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";
import { portfolio } from "@/lib/data";
 
export function generateStaticParams() {
  return portfolio.projects.map((p) => ({ slug: p.id }));
}
 
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolio.projects.find((p) => p.id === slug);
 
  if (!project) notFound();
 
  return <ProjectDetailClient slug={slug} />;
}