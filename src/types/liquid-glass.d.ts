declare module "@sohumsuthar/liquid-glass" {
  import type { CSSProperties, ReactNode } from "react";

  type LensOptions = {
    bezel?: number;
    refraction?: number;
    dispersion?: number;
    radius?: number;
    maxTexture?: number;
  };

  type LiquidGlassProps = {
    children?: ReactNode;
    className?: string;
    contentClassName?: string;
    contentStyle?: CSSProperties;
    style?: CSSProperties;
    macro?: boolean;
    variant?: "clear" | "regular";
    dimmed?: boolean;
    interactive?: boolean;
    lens?: boolean;
    lensOptions?: LensOptions;
    mobileFlat?: boolean;
  };

  export function LiquidGlass(props: LiquidGlassProps): ReactNode;
}
