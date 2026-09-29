import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";
import Button from "./Button.astro";

async function render(
	props: Record<string, unknown>,
	slots: Record<string, unknown> = {},
) {
	const container = await AstroContainer.create();
	return container.renderToString(Button, { props, slots });
}

describe("Button", () => {
	test("renderiza <button> por defecto con variante primary", async () => {
		const html = await render({}, { default: "Cotizar" });
		expect(html).toContain("<button");
		expect(html).toContain('data-variant="primary"');
		expect(html).toContain("Cotizar");
	});

	test("renderiza <a> cuando se pasa href", async () => {
		const html = await render(
			{ href: "https://wa.me/573000000000" },
			{ default: "WhatsApp" },
		);
		expect(html).toContain("<a");
		expect(html).toContain('href="https://wa.me/573000000000"');
		expect(html).toContain('rel="noopener"');
	});

	test("aplica variante whatsapp y tamaño", async () => {
		const html = await render(
			{ variant: "whatsapp", size: "sm" },
			{ default: "Cotizar" },
		);
		expect(html).toContain('data-variant="whatsapp"');
		expect(html).toContain('data-size="sm"');
	});
});
