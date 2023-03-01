import { getPosts } from './getPosts';

export async function getPostsSortedByTitle() {
  try {
    const posts = await getPosts();

    const sortedPosts = posts.sort((firstPost, secondPost) => {
      return secondPost.title.length - firstPost.title.length;
    });

    return sortedPosts[0];
  } catch {
    return [];
  }
}
