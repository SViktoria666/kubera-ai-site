import type { Metadata } from "next";
import { LiquidGlassLab } from "@/components/design-lab/LiquidGlassLab";

export const metadata: Metadata = {
  title: "Liquid Glass Material Lab",
  robots: { index: false, follow: false, nocache: true },
};

export default function LiquidGlassLabPage() {
  return <LiquidGlassLab />;
}
