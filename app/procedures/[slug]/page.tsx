import { notFound, permanentRedirect } from "next/navigation";
import legitimatePages from "@/content/migrated/legitimate-pages.json";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return legitimatePages
    .filter((p) => p.type === "procedure" || p.type === "seo-page")
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function ProcedureRedirectPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Validate the slug exists in our legitimate database
  const pageExists = legitimatePages.some((p) => p.slug === slug);
  
  if (!pageExists) {
    notFound();
  }

  // Perform permanent 301 redirect to the flat root URL
  permanentRedirect(`/${slug}`);
}
