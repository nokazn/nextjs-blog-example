import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getSortedPostData = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fileContents = fs.readFileSync(path.join(postsDirectory, fileName), 'utf8');
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult,
    };
  });

  return allPostData.sort((a, b) => {
    return a.date < b.date
      ? 1
      : -1;
  });
};
