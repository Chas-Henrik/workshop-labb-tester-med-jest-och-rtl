import { describe, test, expect } from "@jest/globals";
import { howFast } from "../question1";

describe("howFast test", () => {

    test("howFast(20)", () => {
        expect(howFast(20)).toBe("Slow");
    });
    test("howFast(50)", () => {
        expect(howFast(50)).toBe("Medium");
    });
    test("howFast(100)", () => {
        expect(howFast(100)).toBe("Fast");
    });
    test("howFast(25)", () => {
        expect(howFast(25)).toBe("Unknown");
    });
});
