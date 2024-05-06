import { Slug, Reference } from 'sanity';
import { PortableTextBlock } from 'next-sanity';

export type Post = {
    title?: string;
    slug?: Slug;
    author?: Reference;
    categories: Reference[];
    publishedAt?: string;
    body?: PortableTextBlock[];
};
