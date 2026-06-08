import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/core/Footer";
import { Header } from "@/components/core/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://kubera-automation.com"),
  title: {
    default: "Kubera AI",
    template: "%s | Kubera AI",
  },
  description: "Living Systems. Smart Automation.",
  icons: {
    icon: "/assets/favicon/tildafavicon.ico",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
