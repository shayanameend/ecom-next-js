"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { MenuIcon, ShoppingCartIcon } from "lucide-react";

import { assets } from "~/assets";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { cn } from "~/lib/utils";

const navLinks = [
  {
    url: "/",
    label: "Home",
  },
  {
    url: "/marketplace",
    label: "Marketplace",
  },
  {
    url: "/vendors",
    label: "Vendors",
  },
  {
    url: "/community",
    label: "Community",
  },
  {
    url: "/contact",
    label: "Contact",
  },
];

export function RootHeader() {
  const router = useRouter();
  const pathname = usePathname();

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <>
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

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
        sizes="(max-width: 640px) 120px, (max-width: 1024px) 150px, 180px"
        className={cn("h-14 md:h-18 w-auto object-cover")}
      />
      <nav>
        <ul className={cn("hidden md:flex gap-4")}>
          {navLinks.map(({ url, label }) => (
            <li key={url}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  router.push(url);
                }}
              >
                {label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <div className={cn("flex flex-row items-center gap-4")}>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon">
              <ShoppingCartIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className={cn("mt-2 mr-4 w-48 md:w-72")}>
            <h2>Your Cart</h2>
          </PopoverContent>
        </Popover>
        <RootHeaderCTAButton className={cn("hidden md:inline-flex")} />
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild className={cn("md:hidden")}>
            <Button variant="outline" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className={cn("w-full md:w-96")}>
            <SheetHeader>
              <SheetTitle className={cn("pt-8")}>
                <Input placeholder="Search for porducts..." />
              </SheetTitle>
              <SheetDescription />
            </SheetHeader>
            <nav className={cn("px-4")}>
              <ul className={cn("flex flex-col gap-1")}>
                {navLinks.map(({ url, label }) => (
                  <li key={url}>
                    <Button
                      variant="link"
                      size="sm"
                      onClick={() => {
                        router.push(url);
                      }}
                      className={cn("text-foreground/65 text-lg")}
                    >
                      {label}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
            <SheetFooter>
              <RootHeaderCTAButton />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function RootHeaderCTAButton({ className }: { className?: string }) {
  return (
    <Button variant="default" size="lg" className={className}>
      Sign In
    </Button>
  );
}
