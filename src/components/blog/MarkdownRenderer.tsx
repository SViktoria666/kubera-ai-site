type MarkdownRendererProps = {
  content: string;
  stripTopHeading?: boolean;
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

function isTableDivider(line: string) {
  return /^\s*\|?(\s*:?-+:?\s*\|)+\s*:?-+:?\s*\|?\s*$/.test(line);
}

function parseTableRow(line: string) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function renderBlock(lines: string[], stripTopHeading: boolean) {
  const html: string[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];
  let orderedItems: string[] = [];
  let quoteLines: string[] = [];
  let codeLines: string[] = [];
  let inCode = false;
  let topHeadingStripped = false;

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

  const flushTable = (tableLines: string[]) => {
    if (tableLines.length < 2) return;

    const [headerLine, ...bodyLines] = tableLines;
    const headers = parseTableRow(headerLine);
    const rows = bodyLines.map(parseTableRow);

    html.push(
      [
        "<table>",
        "<thead>",
        `<tr>${headers.map((cell) => `<th>${renderInline(cell)}</th>`).join("")}</tr>`,
        "</thead>",
        "<tbody>",
        ...rows.map((row) => `<tr>${row.map((cell) => `<td>${renderInline(cell)}</td>`).join("")}</tr>`),
        "</tbody>",
        "</table>",
      ].join("\n"),
    );
  };

  const flushAll = () => {
    flushParagraph();
    flushList();
    flushOrdered();
    flushQuote();
    flushCode();
  };

  for (let index = 0; index < lines.length; index += 1) {
    const rawLine = lines[index];
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
      if (stripTopHeading && !topHeadingStripped && level === 1) {
        topHeadingStripped = true;
        continue;
      }
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

    const nextLine = lines[index + 1]?.trim() ?? "";
    if (trimmed.includes("|") && isTableDivider(nextLine)) {
      flushAll();

      const tableLines: string[] = [trimmed];
      index += 2;
      while (index < lines.length) {
        const candidate = lines[index].trim();
        if (!candidate || !candidate.includes("|")) {
          index -= 1;
          break;
        }

        tableLines.push(candidate);
        index += 1;
      }

      flushTable(tableLines);
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

export function MarkdownRenderer({ content, stripTopHeading = false }: MarkdownRendererProps) {
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const html = renderBlock(lines, stripTopHeading);

  return <div className="blog-markdown" dangerouslySetInnerHTML={{ __html: html }} />;
}
