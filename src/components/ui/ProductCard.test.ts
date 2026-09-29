import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";
import ProductCard from "./ProductCard.astro";

describe("ProductCard", () => {
	test("muestra nombre, referencia, sin precio y CTA de cotización", async () => {
		const container = await AstroContainer.create();
		const html = await container.renderToString(ProductCard, {
			props: {
				name: 'Tubo PVC sanitario 4"',
				reference: "PVC-040",
				category: "Tuberías",
			},
		});
		expect(html).toContain("Tubo PVC sanitario");
		expect(html).toContain("Ref. PVC-040");
		expect(html).toContain("Precio a consultar");
		expect(html).toContain("Cotizar por WhatsApp");
		expect(html).toContain("wa.me/");
		expect(html).toContain("Cotizar por email");
		expect(html).toContain("mailto:");
	});
});
