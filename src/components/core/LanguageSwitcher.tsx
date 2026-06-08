export function LanguageSwitcher() {
  return (
    <div aria-label="Language switcher" style={{ display: "flex", gap: 8 }}>
      <a className="button" style={{ minHeight: 36, padding: "0 14px", background: "var(--color-blue)", color: "#fff" }} href="/">
        EN
      </a>
      <a className="button" style={{ minHeight: 36, padding: "0 14px", background: "var(--color-blue)", color: "#fff" }} href="/ru">
        RU
      </a>
    </div>
  );
}

