import { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = getAllSlugs();
  const blogUrls = blogSlugs.map((slug) => ({
    url: `https://laeti-seo.fr/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: 'https://laeti-seo.fr',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://laeti-seo.fr/offre',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://laeti-seo.fr/feuille-de-route',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://laeti-seo.fr/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://laeti-seo.fr/consultant-seo-aix-en-provence',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://laeti-seo.fr/consultant-seo-marseille',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://laeti-seo.fr/consultant-seo-toulon',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://laeti-seo.fr/audit-seo-local',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://laeti-seo.fr/seo-pour-artisans',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://laeti-seo.fr/Guide-Trouvable',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...blogUrls,
  ];
}
