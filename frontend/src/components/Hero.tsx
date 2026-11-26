import type { ReactNode } from "react";
import "../styles/component_styles/hero.scss";

export default function Hero({
  image,
  customOpacity,
  children,
}: {
  image?: string;
  customOpacity?: number;
  children: ReactNode;
}) {
  return (
    <div className="hero-container px-4 py-lg-5 text-center position-relative overflow-hidden d-flex flex-column justify-content-center align-items-center">
      <img src={image} className="bg" style={{ opacity: customOpacity }} />
      <div className="content">{children}</div>
    </div>
  );
}
