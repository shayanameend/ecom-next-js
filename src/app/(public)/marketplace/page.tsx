import type { InfoType, MetaType, ProductType } from "~/types";

import Image from "next/image";

import axios from "axios";

import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { routes } from "~/lib/routes";
import { cn } from "~/lib/utils";

export default async function MarketplacePage() {
  let response: {
    data: {
      products: ProductType[];
    };
    meta: MetaType;
    info: InfoType;
  };

  try {
    const { data } = await axios.get(routes.api.public.products.url());

    response = data;
  } catch (error) {
    console.error(error);

    response = {
      data: {
        products: [],
      },
      meta: {
        total: 0,
        pages: 1,
        limit: 10,
        page: 1,
      },
      info: {
        message: "Something went wrong while fetching the products!",
      },
    };
  }

  return (
    <>
      <section className={cn("py-2 px-4")}>
        <ul
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4",
          )}
        >
          {response.data.products.map((product) => (
            <li key={product.id}>
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
                <CardFooter className={cn("p-4")}>
                  <h3 className={cn("")}>{product.name}</h3>
                  <p className={cn("")}>{product.price}</p>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
