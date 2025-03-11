import type { PropsWithChildren } from "react";

export default function ProtectedLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return <main>{children}</main>;
}
