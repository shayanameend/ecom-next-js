import type { CartType } from "~/types";

import { map } from "nanostores";

export const $cart = map<CartType>({
  items: [],
});
