import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { cn } from "~/lib/utils";

import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "Next App",
  description: "Next App",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={cn("antialiased")}>{children}</body>
    </html>
  );
}
