import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),                  // Örn: "GES Kurulumu"
      heroBadge: z.string(),              // Örn: "GÜNEŞ ENERJİ ÇÖZÜMLERİ"
      heroTitle: z.string(),              // Örn: "GÜVENİLİR GES KURULUMLARI"
      shortDescription: z.string(),       // Kart ve slider özeti
      coverImage: image().optional(),     // src/assets/services/... altından optimize görsel (lokal esneklik için opsiyonel)
      order: z.number().default(1),       // Sıralama kontrolü (1, 2, 3)
      featured: z.boolean().default(true),
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      coverImage: image().optional(),
      imageAlt: z.string().optional(),
      category: z
        .enum(['GES Kurulumu', 'Bakım & Temizlik', 'Uzman Tavsiyesi', 'Elektrik', 'Mevzuat'])
        .default('Uzman Tavsiyesi'),
      draft: z.boolean().default(false),
      faqs: z
        .array(
          z.object({
            question: z.string(),
            answer: z.string(),
          })
        )
        .optional(),
    }),
});

export const collections = { services, blog };
