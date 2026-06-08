import Image from "next/image";
import { LanguageSwitcher } from "@/components/core/LanguageSwitcher";
import { navItems } from "@/content/en/navigation";
import { getAssetByName } from "@/content/assets";

export function Header() {
  const logo = getAssetByName("kubera-logo-main");

  return (
    <header style={{ borderBottom: "1px solid var(--color-border)" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", gap: 24, minHeight: 78 }}>
        <a href="/" aria-label="Kubera AI home" style={{ display: "inline-flex", alignItems: "center" }}>
          {logo ? (
            <Image src={logo.localPath} alt="Kubera AI" width={180} height={108} priority style={{ height: 56, width: "auto" }} />
          ) : (
            <strong>KUBERA AI</strong>
          )}
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
