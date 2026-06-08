import { LanguageSwitcher } from "@/components/core/LanguageSwitcher";
import { navItems } from "@/content/en/navigation";

export function Header() {
  return (
    <header style={{ borderBottom: "1px solid var(--color-border)" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", gap: 24, minHeight: 78 }}>
        <a href="/" aria-label="Kubera AI home" style={{ fontWeight: 900 }}>
          KUBERA AI
          <span className="muted" style={{ display: "block", fontSize: 12, fontWeight: 600 }}>
            Living Systems. Smart Automation.
          </span>
        </a>
        <nav aria-label="Main navigation" style={{ display: "flex", flex: 1, gap: 18, justifyContent: "center", flexWrap: "wrap" }}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}

