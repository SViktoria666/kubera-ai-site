import Link from "next/link";
import type { BlogPost } from "@/content/blog";
import { getBlogPublishedDate, getBlogSeoDescription } from "@/content/blog/helpers";
import { getBlogSolutionLinks } from "@/content/internal-linking";
import { siteConfig } from "@/content/site";
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
  const canonicalUrl = `${siteConfig.url}${post.url}`;
  const relatedSolutionLinks = post.frontmatter.language === "en" ? getBlogSolutionLinks(post.frontmatter.slug) : [];
  const author = {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  };
  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#blogposting`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    headline: post.frontmatter.title,
    description: getBlogSeoDescription(post),
    image: `${siteConfig.url}${siteConfig.defaultOgImage}`,
    datePublished: getBlogPublishedDate(post),
    dateModified: getBlogPublishedDate(post),
    author,
    publisher: author,
    inLanguage: post.frontmatter.language === "ru" ? "ru-RU" : post.frontmatter.language === "es" ? "es-ES" : "en-US",
    articleSection: post.frontmatter.category,
    keywords: post.frontmatter.tags.join(", "),
    isAccessibleForFree: true,
    url: canonicalUrl,
  };

  return (
    <main className="section">
      <div className="container blog-article-layout">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPosting) }} />
        <div className="blog-article-header">
          <p className="eyebrow">{post.frontmatter.category}</p>
          <h1 className="section-title blog-article-title">{post.frontmatter.title}</h1>
          <p className="lead blog-article-description">{post.frontmatter.description}</p>
          <div className="blog-article-meta">
            <time dateTime={getBlogPublishedDate(post)}>{formatDate(getBlogPublishedDate(post))}</time>
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

        {relatedSolutionLinks.length ? (
          <section className="section section-soft" style={{ paddingTop: "12px" }}>
            <div className="solution-section-heading">
              <p className="eyebrow">Related solution pages</p>
              <h2 className="section-title">Commercial pages connected to this topic</h2>
              <p className="lead solution-section-lead">These links keep the article connected to the solution architecture without turning the post into a sales page.</p>
            </div>

            <div className="solution-grid solution-grid--services">
              {relatedSolutionLinks.map((item) => (
                <Link className="solution-card solution-card--link" href={item.href} key={item.href}>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.description}</p>
                  <span className="solution-card-link">Open solution page</span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <div className="blog-article-backlink">
          <Link className="button" href="/blog">
            Back to blog
          </Link>
        </div>
      </div>
    </main>
  );
}
