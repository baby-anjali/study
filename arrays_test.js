import { assertEquals } from "jsr:@std/assert";
import {
  product,
  filterTruthy,
  filterPrimes,
  sortByLength,
  squareRoots,
} from "./arrays.js";

Deno.test("Product of elements with empty array", () => {
  assertEquals(product([]), 1);
});

Deno.test("Product of elements that are all positive", () => {
  assertEquals(product([1, 2, 3]), 6);
  assertEquals(product([1, 2]), 2);
  assertEquals(product([1]), 1);
});

Deno.test("Product of elements where some are negative", () => {
  assertEquals(product([1, 2, -3]), -6);
  assertEquals(product([-1, -2]), 2);
  assertEquals(product([9, -7, -8]), 504);
  assertEquals(product([-1]), -1);
});

Deno.test("Product of elements where there is zero", () => {
  assertEquals(product([1, 0, -3]), 0);
  assertEquals(product([-1, 0]), 0);
  assertEquals(product([0, -7, -8]), 0);
  assertEquals(product([0]), 0);
});
