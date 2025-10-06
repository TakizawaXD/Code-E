import type { SVGProps } from "react";

export function KursorLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 50"
      width="110"
      height="25"
      aria-label="Kursor Logo"
      {...props}
    >
      <text
        x="0"
        y="40"
        fontFamily="Inter, sans-serif"
        fontSize="40"
        fontWeight="bold"
        fill="hsl(var(--primary))"
        className="dark:fill-hsl(var(--primary-foreground))"
      >
        Kursor
      </text>
    </svg>
  );
}
