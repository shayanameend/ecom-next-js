import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { ThemeProvider } from "~/components/providers/theme";

import { cn } from "~/lib/utils";

import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "Next App",
  description: "Next App",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased")}>
        <ThemeProvider enableSystem defaultTheme="light" attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
