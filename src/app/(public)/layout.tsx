import type { PropsWithChildren } from "react";

export default function PublicLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return <main>{children}</main>;
}
