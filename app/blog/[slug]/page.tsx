import { NextPage } from "next";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ params }) => {
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>
    </main>
  );
};
export default BlogPostPage;
