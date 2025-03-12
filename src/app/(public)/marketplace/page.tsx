import type { InfoType, MetaType, ProductType } from "~/types";

import axios from "axios";

import { Product } from "~/app/_components/product";
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
              <Product product={product} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
