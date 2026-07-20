import { scratch } from "./scratch";

describe("scratch", () => {
  it.each([
    // [input, expected],
  ])("scratch(%j) === %j", (input, expected) => {
    expect(scratch(input)).toEqual(expected);
  });
});
