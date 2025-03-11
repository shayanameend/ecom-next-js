import Image from "next/image";

import { MenuIcon, ShoppingCartIcon } from "lucide-react";

import { assets } from "~/assets";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
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
        height={48}
        sizes="(max-width: 640px) 120px, (max-width: 1024px) 150px, 180px"
        className={cn("h-12 w-auto object-cover")}
      />
      <div className={cn("flex flex-row items-center gap-4")}>
        <Button variant="outline" size="icon">
          <ShoppingCartIcon />
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle />
              <SheetDescription />
            </SheetHeader>
            <SheetFooter>
              <SheetClose asChild>
                <Button />
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
