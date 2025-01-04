import { assert, assertFalse, assertEquals } from "jsr:@std/assert";
import {
  emailValidate,
  usPhoneValidate,
  allNumbers,
  startEnd,
  duplicates,
} from "./regex.js";

Deno.test("Email validation with correct emails", () => {
  assert(emailValidate.test("abc@mail.com"));
  assert(emailValidate.test("ab0c@mail.com"));
  assert(emailValidate.test("abc_4@gmail.com"));
});

Deno.test("Email validation with incorrect emails", () => {
  assertFalse(emailValidate.test("abc@mailcom"));
  assertFalse(emailValidate.test("ab c@mailcom"));
  assertFalse(emailValidate.test("abcmailcom"));
});

Deno.test("Validation for correct US phone numbers", () => {
  assert(usPhoneValidate.test("(123) 456-7890"));
  assert(usPhoneValidate.test("(555) 555-5555"));
});

Deno.test("Validation for incorrect US phone numbers", () => {
  assertFalse(usPhoneValidate.test("(123 456-7890"));
  assertFalse(usPhoneValidate.test("(555) 555-555"));
});

Deno.test("Strings start with Hello and end with World!: correct", () => {
  assert(startEnd.test("HelloWorld!"));
  assert(startEnd.test("Hello World!"));
  assert(startEnd.test("Hello  World!"));
  assert(startEnd.test("Hello my World!"));
});

Deno.test("Strings start with Hello and end with World!: incorrect", () => {
  assertFalse(startEnd.test("Helloworld!"));
  assertFalse(startEnd.test("HelloWorld"));
  assertFalse(startEnd.test("helloWorld!"));
  assertFalse(startEnd.test("Helo  World!"));
});

Deno.test("Extract numbers from strings with numbers", () => {
  assertEquals("0".match(allNumbers), ["0"]);
  assertEquals("abc22 0".match(allNumbers), ["22", "0"]);
  assertEquals("22df35 gh0".match(allNumbers), ["22", "35", "0"]);
  assertEquals("abc22df35 56 gh0".match(allNumbers), ["22", "35", "56", "0"]);
});

Deno.test("Extract numbers from strings with no numbers", () => {
  assertEquals("abc".match(allNumbers), null);
  assertEquals("a bc".match(allNumbers), null);
  assertEquals("ab c".match(allNumbers), null);
  assertEquals("abc ".match(allNumbers), null);
  assertEquals(" abc".match(allNumbers), null);
  assertEquals(" abc ".match(allNumbers), null);
});
