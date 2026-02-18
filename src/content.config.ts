import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['es', 'en']),
    location: z.array(z.string()),
    locationLabels: z.array(z.string()),
    image: z.string().optional(),
    author: z.string().default('Travesía21'),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
