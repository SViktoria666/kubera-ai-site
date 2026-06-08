export function BlogVisualShell({ locale }: { locale: "en" | "ru" }) {
  const isRu = locale === "ru";

  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">{isRu ? "Блог" : "Blog"}</p>
        <h1 className="section-title">{isRu ? "Блог Kubera AI" : "Kubera AI Blog"}</h1>
        <p className="lead">
          {isRu ? "Каркас для будущих материалов об автоматизации, AI и n8n." : "A visual shell for future automation, AI, and n8n articles."}
        </p>
        <div className="blog-shell">
          {[1, 2, 3].map((item) => (
            <article className="blog-card" key={item}>
              <p className="eyebrow">{isRu ? "Скоро" : "Coming soon"}</p>
              <h2>{isRu ? `Материал ${item}` : `Article ${item}`}</h2>
              <p className="muted">{isRu ? "Контент будет добавлен на отдельном этапе." : "Content will be added in a separate publishing stage."}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
