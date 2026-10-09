import type { ReactNode } from "react";

/** Remounts on every navigation, so each page fades in. Opacity only: a transform here would break `position: fixed` children. */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="animate-page-in">{children}</div>;
}
