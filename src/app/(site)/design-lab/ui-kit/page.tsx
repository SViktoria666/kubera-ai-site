import type { Metadata } from "next";
import { UiKitLab } from "@/components/design-lab/UiKitLab";

export const metadata: Metadata = {
  title: "Kubera UI Kit Lab",
  robots: { index: false, follow: false, nocache: true },
};

export default function UiKitLabPage() {
  return <UiKitLab />;
}
