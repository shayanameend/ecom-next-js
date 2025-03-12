import type { InfoType, MetaType, ProductType } from "~/types";

import axios from "axios";
import * as zod from "zod";

import { Product } from "~/app/_components/product";
import { routes } from "~/lib/routes";
import { cn } from "~/lib/utils";

const searchParamsSchema = zod.object({
  page: zod.coerce
    .number({
      message: "Page must be a number!",
    })
    .int({
      message: "Page must be an integer!",
    })
    .min(1, {
      message: "Page must be a positive number!",
    })
    .default(1),
  limit: zod.coerce
    .number({
      message: "Limit must be a number!",
    })
    .int({
      message: "Limit must be an integer!",
    })
    .min(1, {
      message: "Limit must be a positive number!",
    })
    .default(10),
  sort: zod
    .enum(["RELEVANCE", "LATEST", "OLDEST"], {
      message: "Sort must be one of 'RELEVANCE', 'LATEST', 'OLDEST'!",
    })
    .optional(),
  name: zod
    .string({
      message: "Name must be a string!",
    })
    .min(1, {
      message: "Name must be at least 1 characters long!",
    })
    .optional(),
  minStock: zod.coerce
    .number({
      message: "Stock must be a number!",
    })
    .int({
      message: "Stock must be an integer!",
    })
    .min(0, {
      message: "Stock must be a non-negative number!",
    })
    .optional(),
  minPrice: zod.coerce
    .number({
      message: "Min Price must be a number!",
    })
    .min(1, {
      message: "Min Price must be a positive number!",
    })
    .optional(),
  maxPrice: zod.coerce
    .number({
      message: "Max Price must be a number!",
    })
    .min(1, {
      message: "Max Price must be a positive number!",
    })
    .optional(),
  categoryId: zod
    .string({
      message: "Category ID must be a string!",
    })
    .length(24, {
      message: "Category ID must be a 24-character string!",
    })
    .optional(),
  vendorId: zod
    .string({
      message: "Vendor ID must be a string!",
    })
    .length(24, {
      message: "Vendor ID must be a 24-character string!",
    })
    .optional(),
});

interface MarketplacePageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function MarketplacePage({
  searchParams,
}: Readonly<MarketplacePageProps>) {
  let response: {
    data: {
      products: ProductType[];
    };
    meta: MetaType;
    info: InfoType;
  };

  try {
    const validatedSearchParams = searchParamsSchema.safeParse(
      await searchParams,
    );

    const queryParams = new URLSearchParams();

    if (validatedSearchParams.success) {
      for (const [key, value] of Object.entries(validatedSearchParams.data)) {
        if (value !== undefined) {
          queryParams.append(key, String(value));
        }
      }
    }

    const queryString = queryParams.toString();

    const apiUrl = `${routes.api.public.products.url()}${queryString ? `?${queryString}` : ""}`;

    const { data } = await axios.get(apiUrl);

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
