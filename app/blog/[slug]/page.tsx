import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "../../../lib/posts";

// 生成所有可能的静态路径
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 为每篇文章生成独立的 metadata（重要：Technical SEO）
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "文章未找到",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-block mb-8 text-sm opacity-60 hover:opacity-100"
        >
          ← 返回博客列表
        </Link>

        <time className="text-sm opacity-50">{post.date}</time>
        <h1 className="text-4xl font-bold mt-3 mb-6 leading-tight">
          {post.title}
        </h1>
        <p className="text-lg opacity-70 mb-10 leading-relaxed">
          {post.description}
        </p>

        <div className="prose prose-lg max-w-none leading-relaxed whitespace-pre-line">
          {post.content}
        </div>
      </div>
    </main>
  );
}