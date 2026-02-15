import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		createdAt: z.coerce.date(),
	}),
});

export const collections = { blog };
