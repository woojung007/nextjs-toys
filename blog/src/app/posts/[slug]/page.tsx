import { getPostData } from "@service/posts";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  // 1. 전달된 slug에 해당하는 포스트 데이터를 읽어온다.
  const post = await getPostData(slug);

  // 2. 데이터를 마크다운뷰어에 표기한다.
  return (
    <>
      <h1>{post.title}</h1>
      <pre>{post.content}</pre>
    </>
  );
}
