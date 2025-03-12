import type { InfoType, MetaType, VendorType } from "~/types";

import axios from "axios";
import * as zod from "zod";

import { Vendor } from "~/app/_components/vendor";
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
  city: zod
    .string({
      message: "City must be a string!",
    })
    .min(1, {
      message: "City must be at least 1 characters long!",
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
});

interface VendorsPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function VendorsPage({
  searchParams,
}: Readonly<VendorsPageProps>) {
  let response: {
    data: {
      vendors: VendorType[];
    };
    meta: MetaType;
    info: InfoType;
  };

  try {
    const validatedParams = searchParamsSchema.safeParse(await searchParams);

    const queryParams = new URLSearchParams();

    if (validatedParams.success) {
      for (const [key, value] of Object.entries(validatedParams.data)) {
        if (value !== undefined) {
          queryParams.append(key, String(value));
        }
      }
    }

    const queryString = queryParams.toString();

    const apiUrl = `${routes.api.public.vendors.url()}${queryString ? `?${queryString}` : ""}`;

    const { data } = await axios.get(apiUrl);

    response = data;
  } catch (error) {
    console.error(error);

    response = {
      data: {
        vendors: [],
      },
      meta: {
        total: 0,
        pages: 1,
        limit: 10,
        page: 1,
      },
      info: {
        message: "Something went wrong while fetching the vendors!",
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
          {response.data.vendors.map((vendor) => (
            <li key={vendor.id}>
              <Vendor vendor={vendor} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
