import { describe, expect, test } from "vitest";
import { cn } from "./cn";

describe("cn", () => {
	test("une clases no vacías", () => {
		expect(cn("a", "b", "c")).toBe("a b c");
	});

	test("filtra valores falsy", () => {
		expect(cn("a", false, "", 0, null, undefined, "b")).toBe("a b");
	});

	test("devuelve string vacío sin argumentos", () => {
		expect(cn()).toBe("");
	});

	test("acepta números", () => {
		expect(cn("gap", 4)).toBe("gap 4");
	});
});
