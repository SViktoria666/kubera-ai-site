export function LanguageSwitcher() {
  return (
    <div aria-label="Language switcher" style={{ display: "flex", gap: 8 }}>
      <a className="lang-button" href="/">
        EN
      </a>
      <a className="lang-button" href="/ru">
        RU
      </a>
    </div>
  );
}
