import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";
import Badge from "./Badge.astro";
import FormField from "./FormField.astro";
import SectionHeader from "./SectionHeader.astro";
import ThemeToggle from "./ThemeToggle.astro";

describe("Badge", () => {
	test("renderiza con tone por defecto accent", async () => {
		const container = await AstroContainer.create();
		const html = await container.renderToString(Badge, {
			slots: { default: "Tuberías" },
		});
		expect(html).toContain('data-tone="accent"');
		expect(html).toContain("Tuberías");
	});
});

describe("SectionHeader", () => {
	test("renderiza eyebrow, título y descripción centrados", async () => {
		const container = await AstroContainer.create();
		const html = await container.renderToString(SectionHeader, {
			props: {
				eyebrow: "Líneas de producto",
				title: "Catálogo",
				description: "Sin precios en línea",
			},
		});
		expect(html).toContain("Líneas de producto");
		expect(html).toContain(">Catálogo</h2>");
		expect(html).toContain("Sin precios en línea");
	});
});

describe("FormField", () => {
	test("renderiza input con label y atributos", async () => {
		const container = await AstroContainer.create();
		const html = await container.renderToString(FormField, {
			props: {
				name: "email",
				label: "Email",
				type: "email",
				placeholder: "tu@correo.com",
			},
		});
		expect(html).toContain('for="field-email"');
		expect(html).toContain('name="email"');
		expect(html).toContain('type="email"');
		expect(html).toContain("tu@correo.com");
	});

	test("indica campo opcional", async () => {
		const container = await AstroContainer.create();
		const html = await container.renderToString(FormField, {
			props: { name: "phone", label: "Teléfono", optional: true },
		});
		expect(html).toContain("(opcional)");
	});
});

describe("ThemeToggle", () => {
	test("renderiza botón con toggles de sol y luna", async () => {
		const container = await AstroContainer.create();
		const html = await container.renderToString(ThemeToggle);
		expect(html).toContain("data-theme-toggle");
		expect(html).toContain('aria-label="Cambiar tema"');
	});
});
