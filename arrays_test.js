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

Deno.test("Filter truthy for array with all truthy values", () => {
  assertEquals(filterTruthy([1]), [1]);
  assertEquals(filterTruthy(["a"]), ["a"]);
  assertEquals(filterTruthy([1, 2]), [1, 2]);
  assertEquals(filterTruthy([1, "a"]), [1, "a"]);
  assertEquals(filterTruthy([1, 2, 3]), [1, 2, 3]);
  assertEquals(filterTruthy(["a", "b", "c"]), ["a", "b", "c"]),
    assertEquals(filterTruthy(["a", true, "c"]), ["a", true, "c"]);
});

Deno.test("Filter truthy for array with some truthy values", () => {
  assertEquals(filterTruthy([1, 0]), [1]);
  assertEquals(filterTruthy(["a", ""]), ["a"]);
  assertEquals(filterTruthy([1, 2, null]), [1, 2]);
  assertEquals(filterTruthy([1, "a", false]), [1, "a"]);
  assertEquals(filterTruthy([1, NaN, 2, 3]), [1, 2, 3]);
  assertEquals(filterTruthy(["a", "b", "c", undefined]), ["a", "b", "c"]);
});

Deno.test("Filter truthy for array with no truthy values", () => {
  assertEquals(filterTruthy([""]), []);
  assertEquals(filterTruthy([0]), []);
  assertEquals(filterTruthy([false]), []);
  assertEquals(filterTruthy([null]), []);
  assertEquals(filterTruthy([undefined]), []);
  assertEquals(filterTruthy([NaN]), []),
    assertEquals(filterTruthy([0, null, undefined, false, 0, "", NaN]), []);
});
