import Image from "next/image";

import { MenuIcon, ShoppingCartIcon } from "lucide-react";

import { assets } from "~/assets";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export function RootHeader() {
  return (
    <header
      className={cn(
        "flex flex-row items-center justify-between gap-6 py-2 px-4",
      )}
    >
      <Image
        priority
        src={assets.pictures.app.logo.src}
        alt={assets.pictures.app.logo.alt}
        width={150}
        height={48}
        sizes="(max-width: 640px) 120px, (max-width: 1024px) 150px, 180px"
        className={cn("h-12 w-auto")}
      />
      <div className={cn("flex flex-row items-center gap-4")}>
        <Button variant="outline" size="icon">
          <ShoppingCartIcon />
        </Button>
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </div>
    </header>
  );
}
