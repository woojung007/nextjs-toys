import PostsGrid from "@components/PostsGrid";
import { getFeaturedPosts } from "@service/posts";

const FeaturedPosts = async () => {
  // 1. 모든 포스트 데이터를 읽어와야 함
  const posts = await getFeaturedPosts();
  //  2. 모든 포스트 데이터를 보여줌

  return (
    <section>
      <h2 className="text-2xl font-bold">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
