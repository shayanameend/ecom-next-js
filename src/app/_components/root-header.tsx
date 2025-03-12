import Image from "next/image";

import { MenuIcon, ShoppingCartIcon } from "lucide-react";

import { assets } from "~/assets";
import { Button } from "~/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
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
        className={cn("h-12 md:h-16 w-auto object-cover")}
      />
      <div className={cn("flex flex-row items-center gap-4")}>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon">
              <ShoppingCartIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className={cn("mt-2 mr-4 w-48 md:w-72")}>
            <h2>Cart</h2>
          </PopoverContent>
        </Popover>
        <Button
          variant="default"
          size="lg"
          className={cn("hidden md:inline-flex")}
        >
          Sign In
        </Button>
        <Sheet>
          <SheetTrigger asChild className={cn("md:hidden")}>
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
                <Button variant="default" size="lg">
                  Sign In
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
