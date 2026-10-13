import type { ReactNode } from "react";

type NeonHeadingProps = {
  children: string;
  nowrapFirstWords?: number;
};

function renderWordSpans(text: string): { nodes: ReactNode[]; wordCount: number } {
  const tokens = text.split(/(\s+)/);
  const wordCount = tokens.filter((token) => /\S/.test(token)).length;
  let wordIndex = 0;

  const nodes = tokens.map((token, index) => {
    if (/\s+/.test(token)) {
      return token;
    }

    const colorClass = wordIndex < Math.ceil(wordCount / 2) ? "heading-word--white" : "heading-word--cyan";
    const node = (
      <span className={`heading-word ${colorClass}`} key={`${token}-${index}`}>
        {token}
      </span>
    );
    wordIndex += 1;
    return node;
  });

  return { nodes, wordCount };
}

export function NeonHeading({ children, nowrapFirstWords }: NeonHeadingProps) {
  const { nodes, wordCount } = renderWordSpans(children);
  const firstWords = nowrapFirstWords ? Math.min(nowrapFirstWords, wordCount) : 0;

  if (!firstWords) {
    return <>{nodes}</>;
  }

  let wordSeen = 0;
  let splitAt = nodes.length;

  for (let index = 0; index < nodes.length; index += 1) {
    const node = nodes[index];
    if (typeof node !== "string") {
      wordSeen += 1;
      if (wordSeen === firstWords) {
        splitAt = index + 1;
        break;
      }
    }
  }

  return (
    <>
      <span className="landing-page-title-nowrap">{nodes.slice(0, splitAt)}</span>
      {nodes.slice(splitAt)}
    </>
  );
}
