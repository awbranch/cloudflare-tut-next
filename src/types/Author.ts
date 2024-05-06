import { Slug, Image, PortableTextBlock } from 'sanity';

export type Author = {
    name?: string;
    slug?: Slug;
    image?: Image;
    bio?: PortableTextBlock[];
}