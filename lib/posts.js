import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getSortedPostData = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fileContents = fs.readFileSync(path.join(postsDirectory, fileName), 'utf8');
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostData.sort((a, b) => {
    return a.date < b.date
      ? 1
      : -1;
  });
};

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md/, ''),
    }
  }));
};

export const getPostData = async (id) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
};
