import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { getBlogPublishedDate } from "@/content/blog/helpers";

type BlogIndexPageProps = {
  locale: "en" | "en-GB" | "ru";
  posts: BlogPost[];
};

function formatDate(date: string, locale: "en" | "en-GB" | "ru") {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat(locale === "ru" ? "ru-RU" : locale === "en-GB" ? "en-GB" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(parsed);
}

export function BlogIndexPage({ locale, posts }: BlogIndexPageProps) {
  const isRu = locale === "ru";

  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">{isRu ? "Блог" : "Blog"}</p>
        <h1 className="section-title">{isRu ? "Kubera AI Blog" : "Kubera AI Blog"}</h1>
        <p className="lead">
          {isRu
            ? "Статьи про AI-автоматизацию, n8n и практические бизнес-системы."
            : "Articles about AI automation, n8n, and practical business systems."}
        </p>

        {posts.length ? (
          <div className="blog-index-grid">
            {posts.map((post) => (
              <article className="blog-index-card card" key={post.frontmatter.slug}>
                <p className="eyebrow">{post.frontmatter.category}</p>
                <h2 className="blog-index-title">
                  <Link href={post.url}>{post.frontmatter.title}</Link>
                </h2>
                <p className="blog-index-description">{post.frontmatter.description}</p>
                <div className="blog-index-meta">
                  <time dateTime={getBlogPublishedDate(post)}>{formatDate(getBlogPublishedDate(post), post.frontmatter.language === "en-GB" ? "en-GB" : locale)}</time>
                  <span>{post.frontmatter.category}</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="blog-empty-state card">
            <p className="muted">{isRu ? "Пока нет опубликованных статей." : "No published articles yet."}</p>
          </div>
        )}
      </div>
    </main>
  );
}
