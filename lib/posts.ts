export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "ai-driven-content-growth",
    title: "用 AI 驱动内容增长：从推广到增长的思维转变",
    description: "分享如何从传统网络推广，转向用 AI 和 SEO 实现真正的内容增长。",
    date: "2026-07-16",
    content: `
这是第一篇文章的完整内容。

在这里，我们会系统讲解：
- 为什么传统推广思维在 AI 时代会失效
- 如何用 AI 提升内容生产效率
- SEO 和 GEO 如何配合使用

后续会继续更新更深入的内容。
    `.trim(),
  },
  {
    slug: "technical-seo-basics",
    title: "Technical SEO 基础：为什么网站必须先被看见",
    description: "从抓取、渲染到规范网址，技术 SEO 才是内容增长的地基。",
    date: "2026-07-15",
    content: `
这是第二篇文章。

我们会重点讲：
- 为什么 Technical SEO 必须优先于内容优化
- Canonical 和重定向为什么这么重要
- 新站常见的索引问题该如何排查
    `.trim(),
  },
];

export function getAllPosts() {
  return posts;
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}