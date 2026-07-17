import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

export const metadata = {
  title: "博客",
  description: "分享 AI 驱动内容增长、SEO、GEO 相关的实战思考与方法。",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">博客</h1>
        <p className="text-lg opacity-70 mb-12">
          用 AI 驱动内容增长 · 从推广到增长
        </p>

        <div className="space-y-10">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-black/10 pb-8">
              <time className="text-sm opacity-50">{post.date}</time>
              <h2 className="text-2xl font-semibold mt-2 mb-3">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="opacity-70 leading-relaxed">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block mt-4 text-sm font-medium underline underline-offset-4"
              >
                阅读全文 →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}