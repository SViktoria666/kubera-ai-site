export function BlogIndexPlaceholder({ locale }: { locale: "en" | "ru" }) {
  const isRu = locale === "ru";

  return (
    <main className="section">
      <div className="container">
        <p className="eyebrow">{isRu ? "Блог" : "Blog"}</p>
        <h1>{isRu ? "Архитектура блога готова." : "Blog architecture is ready."}</h1>
        <p className="lead">
          {isRu
            ? "Контент будет подключен позже через управляемый AI + n8n процесс публикации."
            : "Content will be connected later through a governed AI + n8n publishing workflow."}
        </p>
      </div>
    </main>
  );
}

