// 1. Write a regular expression to validate an email address.
export const emailValidate = /\S+@g?mail.com/;

// 2. Create a regex pattern to match a U.S. phone number format:
// `(123) 456-7890`.
export const usPhoneValidate = /\(\d{3}\) \d{3}-\d{4}/;

// 3. Extract all the numbers from the string `"abc123def456ghi789"`.
export const allNumbers = /\d+/g;

// 4. Validate if a string starts with `"Hello"` and ends with `"World!"`.
export const startEnd = /^Hello.*World!$/;

// 5. Write a regex to find duplicate words in the string:
// `"This is is a test test string."`.
export const duplicates = /\b(\w+)\s+\1\b/g;
