// @ts-nocheck
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

const postsDirectory = join(process.cwd(), 'posts');

function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

function getPostBySlug(slug, fields) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'));

  return posts;
}

export async function convertMarkdownToHtml(markdown) {
  const result = await remark()
    .use(html, { sanitize: false })
    .use(prism)
    .process(markdown);
  return result.toString();
}

export { getPostSlugs, getPostBySlug, getAllPosts };
