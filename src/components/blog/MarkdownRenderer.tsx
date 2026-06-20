type MarkdownRendererProps = {
  content: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderInline(markdown: string) {
  const escaped = escapeHtml(markdown);

  return escaped
    .replace(/\[([^\]]+)\]\(((?:https?:\/\/|\/)[^\s)]+)\)/g, (_, label: string, href: string) => {
      const external = href.startsWith("http://") || href.startsWith("https://");
      return external
        ? `<a href="${href}" rel="noreferrer noopener" target="_blank">${label}</a>`
        : `<a href="${href}">${label}</a>`;
    })
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

function renderBlock(lines: string[]) {
  const html: string[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];
  let orderedItems: string[] = [];
  let quoteLines: string[] = [];
  let codeLines: string[] = [];
  let inCode = false;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (listItems.length) {
      html.push(`<ul>${listItems.map((item) => `<li>${renderInline(item)}</li>`).join("")}</ul>`);
      listItems = [];
    }
  };

  const flushOrdered = () => {
    if (orderedItems.length) {
      html.push(`<ol>${orderedItems.map((item) => `<li>${renderInline(item)}</li>`).join("")}</ol>`);
      orderedItems = [];
    }
  };

  const flushQuote = () => {
    if (quoteLines.length) {
      html.push(`<blockquote>${quoteLines.map((line) => renderInline(line)).join("<br />")}</blockquote>`);
      quoteLines = [];
    }
  };

  const flushCode = () => {
    if (codeLines.length) {
      html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
      codeLines = [];
    }
  };

  const flushAll = () => {
    flushParagraph();
    flushList();
    flushOrdered();
    flushQuote();
    flushCode();
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      if (inCode) {
        flushCode();
      } else {
        flushAll();
      }
      inCode = !inCode;
      continue;
    }

    if (inCode) {
      codeLines.push(rawLine);
      continue;
    }

    if (!trimmed) {
      flushAll();
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      flushAll();
      const level = headingMatch[1].length;
      html.push(`<h${level}>${renderInline(headingMatch[2])}</h${level}>`);
      continue;
    }

    if (/^-\s+/.test(trimmed) || /^\*\s+/.test(trimmed)) {
      flushParagraph();
      flushOrdered();
      flushQuote();
      listItems.push(trimmed.replace(/^[-*]\s+/, ""));
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      flushParagraph();
      flushList();
      flushQuote();
      orderedItems.push(trimmed.replace(/^\d+\.\s+/, ""));
      continue;
    }

    if (trimmed.startsWith(">")) {
      flushParagraph();
      flushList();
      flushOrdered();
      quoteLines.push(trimmed.replace(/^>\s?/, ""));
      continue;
    }

    flushList();
    flushOrdered();
    flushQuote();
    paragraph.push(trimmed);
  }

  flushAll();
  return html.join("\n");
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const html = renderBlock(lines);

  return <div className="blog-markdown" dangerouslySetInnerHTML={{ __html: html }} />;
}
