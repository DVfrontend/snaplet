import { ReactNode } from "react";

export default function ItemsCategory({ children }: { children: ReactNode }) {
  return <div className="grid">{children}</div>;
}
