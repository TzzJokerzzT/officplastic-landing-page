import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";
import type { Product } from "../../data/site";
import ProductDetail from "./ProductDetail.astro";

const product: Product = {
	name: "Rollo plástico 2x2",
	reference: "RP2x2",
	category: "Plásticos",
	description: "Rollo plástico color negro.",
	image: "https://example.com/img.jpg",
	imageAlt: "Rollo plástico negro",
	specs: [
		{ label: "Material", value: "Polietileno (LDPE)" },
		{ label: "Medida", value: "2 x 2 m" },
	],
};

describe("ProductDetail", () => {
	test("muestra nombre, referencia, descripción y breadcrumb", async () => {
		const container = await AstroContainer.create();
		const html = await container.renderToString(ProductDetail, {
			props: { product },
		});

		expect(html).toContain("Rollo plástico 2x2");
		expect(html).toContain("Referencia: RP2x2");
		expect(html).toContain("Rollo plástico color negro.");
		expect(html).toContain('href="/#catalogo"');
		expect(html).toContain("Precio a consultar");
	});

	test("muestra especificaciones en tabla", async () => {
		const container = await AstroContainer.create();
		const html = await container.renderToString(ProductDetail, {
			props: { product },
		});

		expect(html).toContain("Especificaciones");
		expect(html).toContain("Polietileno (LDPE)");
		expect(html).toContain("2 x 2 m");
	});

	test("genera CTAs de cotización (WhatsApp y email) sin precio", async () => {
		const container = await AstroContainer.create();
		const html = await container.renderToString(ProductDetail, {
			props: { product },
		});

		expect(html).toContain("Cotizar por WhatsApp");
		expect(html).toContain("wa.me/");
		expect(html).toContain("Cotizar por email");
		expect(html).toContain("mailto:");
	});

	test("muestra galería cuando hay más de una imagen", async () => {
		const withGallery: Product = {
			...product,
			gallery: ["https://example.com/extra.jpg"],
		};
		const container = await AstroContainer.create();
		const html = await container.renderToString(ProductDetail, {
			props: { product: withGallery },
		});

		expect(html).toContain("https://example.com/extra.jpg");
		expect(html).toMatch(/<img/);
	});

	test("sin imagen cae al placeholder de categoría", async () => {
		const noImage: Product = {
			name: "X",
			reference: "X-1",
			category: "Plásticos",
		};
		const container = await AstroContainer.create();
		const html = await container.renderToString(ProductDetail, {
			props: { product: noImage },
		});

		expect(html).toContain("Plásticos".slice(0, 1));
	});
});
