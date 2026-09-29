import { describe, expect, test } from "vitest";
import {
	type CtaLink,
	type CtaWhatsApp,
	DEFAULT_QUOTE_MESSAGE,
	resolveCtaHref,
} from "./cta";

describe("resolveCtaHref", () => {
	test("link devuelve el href tal cual", () => {
		const cta: CtaLink = { label: "Catálogo", type: "link", href: "#catalogo" };
		expect(resolveCtaHref(cta)).toBe("#catalogo");
	});

	test("whatsapp construye wa.me con número y mensaje", () => {
		const cta: CtaWhatsApp = {
			label: "Cotizar",
			type: "whatsapp",
			message: "Hola Officplastic",
		};
		expect(resolveCtaHref(cta, "573000000000")).toBe(
			"https://wa.me/573000000000?text=Hola%20Officplastic",
		);
	});

	test("whatsapp usa mensaje por defecto si no se pasa", () => {
		const cta: CtaWhatsApp = { label: "Cotizar", type: "whatsapp" };
		expect(resolveCtaHref(cta, "573000000000")).toContain(
			encodeURIComponent(DEFAULT_QUOTE_MESSAGE),
		);
	});

	test("email construye mailto", () => {
		const cta = { label: "Email", type: "email" as const, message: "Hola" };
		const href = resolveCtaHref(cta, undefined, "ventas@officplastic.com");
		expect(href).toContain("mailto:ventas@officplastic.com");
		expect(href).toContain("body=");
	});
});
