import { assert, assertFalse, assertEquals } from "jsr:@std/assert";
import {
  emailValidate,
  usPhoneValidate,
  allNumbers,
  startEnd,
  duplicates,
} from "./regex.js";

Deno.test("Email validation with incorrect emails", () => {
  assertFalse(emailValidate.test("abc@mailcom"));
  assertFalse(emailValidate.test("ab c@mailcom"));
  assertFalse(emailValidate.test("abcmailcom"));
});

Deno.test("Email validation with correct emails", () => {
  assert(emailValidate.test("abc@mail.com"));
  assert(emailValidate.test("ab0c@mail.com"));
  assert(emailValidate.test("abc_4@gmail.com"));
});

Deno.test("Validation for correct US phone numbers", () => {
  assert(usPhoneValidate.test("(123) 456-7890"));
  assert(usPhoneValidate.test("(555) 555-5555"));
});

Deno.test("Validation for incorrect US phone numbers", () => {
  assertFalse(usPhoneValidate.test("(123 456-7890"));
  assertFalse(usPhoneValidate.test("(555) 555-555"));
});
