import { describe, expect, test } from "vitest";
import { applyTheme, getInitialTheme, isTheme, toggleTheme } from "./theme";

function storageWith(value: string | null): {
	getItem(key: string): string | null;
} {
	return { getItem: () => value };
}

describe("isTheme", () => {
	test("acepta light y dark", () => {
		expect(isTheme("light")).toBe(true);
		expect(isTheme("dark")).toBe(true);
	});

	test("rechaza otros valores", () => {
		expect(isTheme("blue")).toBe(false);
		expect(isTheme(null)).toBe(false);
	});
});

describe("getInitialTheme", () => {
	test("usa el valor guardado", () => {
		expect(getInitialTheme(storageWith("dark"))).toBe("dark");
		expect(getInitialTheme(storageWith("light"))).toBe("light");
	});

	test("respeta preferencia del sistema sin valor guardado", () => {
		expect(getInitialTheme(storageWith(null), () => true)).toBe("dark");
		expect(getInitialTheme(storageWith(null), () => false)).toBe("light");
	});
});

describe("applyTheme", () => {
	test("setea data-theme en el elemento", () => {
		const element = { dataset: {} as Record<string, string | undefined> };
		applyTheme("dark", element);
		expect(element.dataset.theme).toBe("dark");
	});
});

describe("toggleTheme", () => {
	test("alterna entre light y dark", () => {
		expect(toggleTheme("light")).toBe("dark");
		expect(toggleTheme("dark")).toBe("light");
	});
});
