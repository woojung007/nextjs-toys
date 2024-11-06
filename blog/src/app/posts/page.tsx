import FilterablePosts from "@components/FilterablePosts";
import { getAllPosts } from "@service/posts";

export default async function PostsPage() {
  const posts = await getAllPosts();
  // Set으로 중복 제거
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilterablePosts posts={posts} categories={categories} />;
}
