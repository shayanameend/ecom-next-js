import type { InfoType, MetaType, ProductType } from "~/types";

import axios from "axios";

import { routes } from "~/lib/routes";

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

  console.log(response);

  return (
    <>
      <section>
        <h1>Marketplace</h1>
        <p>Here you can find all the products available for purchase.</p>
        <ul>
          {response.data.products.map(
            (product: { name: string; price: number }) => (
              <li key={product.name}>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
              </li>
            ),
          )}
        </ul>
      </section>
    </>
  );
}
