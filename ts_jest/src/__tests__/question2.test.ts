import { describe, test, expect } from "@jest/globals";
import { removeDuplicates } from "../question2";

describe("removeDuplicates test", () => {

    test("removeDuplicates([])", () => {
        expect(removeDuplicates([])).toEqual([]);
    });
    test("removeDuplicates([50, 50, 20, 10, 5, 5, 0, -45, 45, -45, 905])", () => {
        expect(removeDuplicates([50, 50, 20, 10, 5, 5, 0, -45, 45, -45, 905])).toEqual([50, 20, 10, 5, 0, -45, 45, 905]);
    });
});