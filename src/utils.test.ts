import { describe, it, expect } from "vitest";
import { mergeValidations } from "./utils";

describe("merge validations", () => {
  it("should be undefined if no validations", () => {
    const merged = mergeValidations();
    expect(merged).toEqual(undefined);
  });

  it("should skip undefined validations", () => {
    const merged = mergeValidations([
      undefined,
      { minLength: 1 },
      undefined,
      { maxLength: 2 },
      undefined,
    ]);
    expect(merged).toEqual([{ minLength: 1, maxLength: 2 }]);
  });

  it("should merge single key allOf", () => {
    const merged = mergeValidations([
      { minLength: 1 },
      { maxLength: 2 },
      { minLength: 3 },
    ]);
    expect(merged).toEqual([{ minLength: 1, maxLength: 2 }, { minLength: 3 }]);
  });
  it("should merge many keys allOf", () => {
    const merged = mergeValidations([
      { minLength: 1, maxLength: 2 },
      { maxLength: 5 },
      { minLength: 4 },
      { format: "email" },
      { pattern: /a+b/ },
    ]);
    expect(merged).toEqual([
      { minLength: 1, maxLength: 2, format: "email", pattern: /a+b/ },
      { minLength: 4, maxLength: 5 },
    ]);
  });
  it("should not merge allOf with not", () => {
    const merged = mergeValidations(
      [
        { minLength: 1, maxLength: 2 },
        { maxLength: 5 },
        { minLength: 4 },
        { format: "email" },
        { pattern: /a+b/ },
        { not: { pattern: /a+b/ } },
        { not: { pattern: /b+c/ } },
      ],
      ["not"]
    );
    expect(merged).toEqual([
      { minLength: 1, maxLength: 2, format: "email", pattern: /a+b/ },
      { minLength: 4, maxLength: 5 },
      { not: { pattern: /a+b/ } },
      { not: { pattern: /b+c/ } },
    ]);
  });
});
