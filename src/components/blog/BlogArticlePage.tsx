import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { MarkdownRenderer } from "./MarkdownRenderer";

type BlogArticlePageProps = {
  post: BlogPost;
};

function formatDate(date: string) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(parsed);
}

export function BlogArticlePage({ post }: BlogArticlePageProps) {
  return (
    <main className="section">
      <div className="container blog-article-layout">
        <div className="blog-article-header">
          <p className="eyebrow">{post.frontmatter.category}</p>
          <h1 className="section-title blog-article-title">{post.frontmatter.title}</h1>
          <p className="lead blog-article-description">{post.frontmatter.description}</p>
          <div className="blog-article-meta">
            <time dateTime={post.frontmatter.date}>{formatDate(post.frontmatter.date)}</time>
            <span>{post.frontmatter.language.toUpperCase()}</span>
            <span>{post.frontmatter.category}</span>
          </div>
          <div className="blog-article-tags">
            {post.frontmatter.tags.map((tag) => (
              <span key={tag} className="blog-article-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <article className="blog-article-body card">
          <MarkdownRenderer content={post.body} />
        </article>

        <div className="blog-article-backlink">
          <Link className="button" href="/blog">
            Back to blog
          </Link>
        </div>
      </div>
    </main>
  );
}
