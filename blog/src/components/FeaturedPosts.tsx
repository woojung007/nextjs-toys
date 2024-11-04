import PostsGrid from "@components/PostsGrid";
import { getAllPosts } from "@service/posts";

const FeaturedPosts = async () => {
  // 1. 모든 포스트 데이터를 읽어와야 함
  const posts = await getAllPosts();
  //  2. 모든 포스트 데이터를 보여줌

  return (
    <section>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
