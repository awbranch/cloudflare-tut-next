import { Slug, Reference, Image } from 'sanity';
import { PortableTextBlock } from 'next-sanity';

export type Post = {
    title?: string;
    slug?: Slug;
    author?: Reference;
    mainImage?: Image;
    categories: Reference[];
    publishedAt?: string;
    body?: PortableTextBlock[];
};
