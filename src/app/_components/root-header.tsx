"use client";

import Image from "next/image";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useState } from "react";

import { useStore } from "@nanostores/react";
import { MenuIcon, ShoppingCartIcon } from "lucide-react";

import { assets } from "~/assets";
import { Badge } from "~/components/ui/badge";
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
import { routes } from "~/lib/routes";
import { cn } from "~/lib/utils";
import { $cart } from "~/stores/cart";

const navLinks = [
  {
    label: routes.app.public.root.label,
    url: routes.app.public.root.url(),
  },
  {
    label: routes.app.public.marketplace.label,
    url: routes.app.public.marketplace.url(),
  },
  {
    label: routes.app.public.vendors.label,
    url: routes.app.public.vendors.url(),
  },
  {
    label: routes.app.public.community.label,
    url: routes.app.public.community.url(),
  },
  {
    label: routes.app.public.contact.label,
    url: routes.app.public.contact.url(),
  },
];

export function RootHeader() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <>
  useEffect(() => {
    setIsSheetOpen(false);
  }, [searchParams, pathname, params]);

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
        className={cn("mt-1 ml-1 h-14 md:h-18 w-auto object-cover")}
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
        <Cart />
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
                <Input
                  placeholder="Search for porducts..."
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      if (event.currentTarget.value) {
                        router.push(
                          `${routes.app.public.marketplace.url()}/?name=${event.currentTarget.value}`,
                        );
                      } else {
                        router.push(routes.app.public.marketplace.url());
                      }
                    }
                  }}
                />
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

function Cart() {
  const cart = useStore($cart);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className={cn("relative")}>
          {cart.items.length > 0 && (
            <Badge className={cn("absolute -top-1.5 -right-1.5 size-5")}>
              {cart.items.length}
            </Badge>
          )}
          <ShoppingCartIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("space-y-4 mt-2 mr-4 w-72")}>
        <h2>Your Cart</h2>
        {cart.items.length > 0 && (
          <ul className={cn("space-y-2")}>
            {cart.items.map((item) => (
              <li key={item.id}>
                <div className={cn("flex flex-row items-center gap-2")}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_FILE_URL}/${item.pictureIds[0]}`}
                    alt={item.name}
                    width={48}
                    height={48}
                    className={cn("size-12 object-cover rounded-md")}
                  />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </PopoverContent>
    </Popover>
  );
}
