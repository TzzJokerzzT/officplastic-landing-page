import { describe, expect, test } from "vitest";
import {
	findProductsByReference,
	getProductRoutes,
	getRelatedProducts,
} from "./catalog";
import { site } from "./site";

describe("getProductRoutes", () => {
	test("genera una ruta por producto del catálogo", () => {
		const paths = getProductRoutes();
		expect(paths.length).toBeGreaterThanOrEqual(1);
		expect(paths.every((p) => typeof p.params.reference === "string")).toBe(
			true,
		);
	});

	test("no genera rutas duplicadas aunque haya referencias repetidas", () => {
		const paths = getProductRoutes();
		const references = paths.map((p) => p.params.reference);
		expect(new Set(references).size).toBe(references.length);
	});

	test("cada ruta incluye el producto correspondiente como prop", () => {
		const paths = getProductRoutes();
		const expected = site.catalog.products.find(
			(p) => p.reference === paths[0].params.reference,
		);
		expect(paths[0].props.product).toEqual(expected);
	});
});

describe("findProductsByReference", () => {
	test("encuentra duplicados con la misma referencia", () => {
		const duplicated = site.catalog.products.find(
			(p, i) =>
				site.catalog.products.findIndex((q) => q.reference === p.reference) !==
				i,
		);
		if (duplicated) {
			expect(
				findProductsByReference(duplicated.reference).length,
			).toBeGreaterThan(1);
		}
	});
});

describe("getRelatedProducts", () => {
	test("excluye el producto actual y respeta el límite", () => {
		const first = site.catalog.products[0];
		const related = getRelatedProducts(first, 2);
		expect(related.length).toBeLessThanOrEqual(2);
		expect(related.some((p) => p.name === first.name)).toBe(false);
	});
});
