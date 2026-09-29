import { describe, expect, test } from "vitest";
import { normalizePhone } from "../lib/quote";
import type { Category, Product } from "./site";
import { ctaHref, site } from "./site";

describe("site (biblioteca de contenido)", () => {
	test("tiene datos de contacto completos", () => {
		expect(site.site.name).toBe("Officplastic");
		expect(normalizePhone(site.site.contact.whatsapp)).toMatch(/^\d{9,15}$/);
		expect(site.site.contact.email).toContain("@");
	});

	test("navegación tiene links y CTA", () => {
		expect(site.nav.links.length).toBeGreaterThanOrEqual(1);
		expect(site.nav.links[0]).toHaveProperty("href");
		expect(ctaHref(site.nav.cta)).toContain("wa.me");
	});

	test("hero tiene títulos, CTAs y stats", () => {
		expect(site.hero.titleLine1.length).toBeGreaterThan(0);
		expect(site.hero.titleLine2.length).toBeGreaterThan(0);
		expect(ctaHref(site.hero.primaryCta)).toBe("#catalogo");
		expect(site.hero.stats.length).toBeGreaterThanOrEqual(3);
	});

	test("categorías y productos tienen campos obligatorios", () => {
		const cats: Category[] = site.categories;
		const products: Product[] = site.catalog.products;

		expect(cats.length).toBeGreaterThanOrEqual(4);
		for (const category of cats) {
			expect(category.title.length).toBeGreaterThan(0);
			expect(category.icon).toMatch(/^mdi:/);
		}

		expect(products.length).toBeGreaterThanOrEqual(1);
		for (const product of products) {
			expect(product.name.length).toBeGreaterThan(0);
			expect(product.reference.length).toBeGreaterThan(0);
			expect(product.category.length).toBeGreaterThan(0);
		}
	});

	test("productos con imagen incluyen alt", () => {
		const withImage = site.catalog.products.filter((p) => Boolean(p.image));
		for (const product of withImage) {
			expect(product.imageAlt?.length).toBeGreaterThan(0);
		}
	});

	test("whyUs, pasos, contacto y footer están completos", () => {
		expect(site.whyUs.items.length).toBeGreaterThanOrEqual(3);
		expect(site.howItWorks.steps.length).toBeGreaterThanOrEqual(3);
		expect(site.contact.info.length).toBeGreaterThanOrEqual(2);
		expect(site.contact.form.fields.length).toBeGreaterThanOrEqual(3);
		expect(site.footer.columns.length).toBeGreaterThanOrEqual(2);
	});
});
