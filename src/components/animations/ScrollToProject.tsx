'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function ScrollToProject() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const scrollToProject = searchParams.get('scrollTo');
    if (scrollToProject === 'projects') {
      setTimeout(() => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" });
        }
        router.replace('/', { scroll: false });
      }, 100);
    }
  }, [searchParams, router]);

  return null;
}