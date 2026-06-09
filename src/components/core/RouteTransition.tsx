"use client";

import { usePathname } from "next/navigation";

type RouteTransitionProps = {
  children: React.ReactNode;
};

export function RouteTransition({ children }: RouteTransitionProps) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="route-transition">
      {children}
    </div>
  );
}
