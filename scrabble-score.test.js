import { calculateScrabbleScore, letters } from "./scrabble-score";
import { test } from "vitest";
import { expect } from "vitest";

// 1. Write a new test that checks whether `calculateScrabbleScore` correctly calculates the score for the word `A`.
//    - Once you've written the test, run the tests with Vitest.
//    - The test you wrote should fail at first. This is because you wrote the test before writing the code to make it pass.
//    - This is the "red" stage in the TDD cycle (red -> green -> refactor)

test("Score for A = 1", () => {
  expect(calculateScrabbleScore("A")).toEqual(1);
});

test.each([
  ["ABBA", 8],
  ["HAD", 7],
])("calculateScrabbleScore(%s) -> %i", (word, expected) => {
  expect(calculateScrabbleScore(word)).toBe(expected);
});

test("result for Abba should be 8", () => {
  expect(calculateScrabbleScore("ABBA")).toBe(8);
});
