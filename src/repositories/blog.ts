import type { MarkdownInstance } from 'astro';
import type IPost from '../types/post';
import { isAfter, isBefore, getYear } from 'date-fns';

interface ITags {
  [name: string]: number
}

interface IYears {
  [year: number]: number
}

type Posts = MarkdownInstance<IPost>[];

export const getPostsCategories = (posts: Posts) : ITags => {
  const tags: ITags = {};

  posts.forEach((p) => {
    p.frontmatter.tags.forEach((t) => {
      if (tags[t] === undefined) {
        tags[t] = 1;
      } else {
        tags[t]++;
      }
    });
  });

  return tags;
}

export const getPostsYears = (posts: Posts) : IYears => {
  const years: IYears = {};

  posts.forEach((p) => {
    const year = getYear(p.frontmatter.pubDate);
    if (years[year] === undefined) {
      years[year] = 1;
    } else {
      years[year]++;
    }
  });

  return years;
}

interface PostFilter {
  tag?: string;
  date?: {
    after?: string | number | Date;
    before?: string | number | Date
  }
}

export const filterPosts = (posts: Posts, filter?: PostFilter): Posts => {
  return posts.filter((p) => 
    (filter?.tag === undefined ? true : p.frontmatter.tags.includes(filter.tag)) &&
    (filter?.date?.after === undefined ? true : isAfter(p.frontmatter.pubDate, filter.date.after)) &&
    (filter?.date?.before === undefined ? true : isBefore(p.frontmatter.pubDate, filter.date.before))
  );
}