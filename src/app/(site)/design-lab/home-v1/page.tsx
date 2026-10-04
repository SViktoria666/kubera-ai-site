import type { Metadata } from "next";
import { HomeDesignPrototype } from "@/components/design-lab/HomeDesignPrototype";

export const metadata: Metadata = {
  title: "Home Design Prototype V1",
  robots: { index: false, follow: false, nocache: true },
};

export default function HomeDesignPrototypePage() {
  return <HomeDesignPrototype />;
}
