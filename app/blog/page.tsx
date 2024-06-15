import Link from "next/link";

const BlogPage = () => {
  return (
    <main>
      <h1>Blog</h1>
      <p>Welcome to my blog</p>
      <p>
        <Link href="/blog/post-1">Post1</Link>
      </p>
      <p>
        <Link href="/blog/post-2">Post2</Link>
      </p>
    </main>
  );
};
export default BlogPage;
