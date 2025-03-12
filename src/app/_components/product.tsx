"use client";

import type { ProductType } from "~/types";

import Image from "next/image";

import { useStore } from "@nanostores/react";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { $cart } from "~/stores/cart";

interface ProductProps {
  product: ProductType;
}

export function Product({ product }: Readonly<ProductProps>) {
  const cart = useStore($cart);

  return (
    <Card className={cn("p-0 gap-0")}>
      <CardContent className={cn("p-0")}>
        <Image
          src={`${process.env.NEXT_PUBLIC_FILE_URL}/${product.pictureIds[0]}`}
          alt={product.name}
          width={180}
          height={180}
          sizes="(max-width: 640px) 120px, (max-width: 1024px) 150px, 180px"
          className={cn("h-48 w-full object-cover rounded-t-xl")}
        />
      </CardContent>
      <CardFooter className={cn("p-4 flex-col items-stretch")}>
        <div>
          <h3 className={cn("")}>{product.name}</h3>
        </div>
        <div className={cn("flex justify-between items-center")}>
          <p className={cn("")}>{product.price}</p>
          <Button
            variant="default"
            size="lg"
            onClick={() => {
              $cart.set({
                items: [
                  ...cart.items,
                  {
                    ...product,
                    quantity: 1,
                  },
                ],
              });
            }}
          >
            Purchase
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
