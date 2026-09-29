import { describe, expect, test } from "vitest";
import {
	buildEmailUrl,
	buildQuoteMessage,
	buildWhatsAppUrl,
	normalizePhone,
	OFFICPLASTIC_EMAIL,
	OFFICPLASTIC_PHONE,
	type QuoteLine,
} from "./quote";

const pvc: QuoteLine = { name: 'Tubo PVC sanitario 4"', reference: "PVC-040" };

describe("buildQuoteMessage", () => {
	test("devuelve mensaje base sin producto", () => {
		expect(buildQuoteMessage()).toBe(
			"Hola Officplastic, quiero una cotización.",
		);
	});

	test("incluye producto y referencia", () => {
		const msg = buildQuoteMessage(pvc);
		expect(msg).toContain('Tubo PVC sanitario 4"');
		expect(msg).toContain("PVC-040");
	});

	test("agrega texto extra si se pasa", () => {
		expect(buildQuoteMessage(pvc, "¿Tienen stock?")).toContain(
			"¿Tienen stock?",
		);
	});
});

describe("normalizePhone", () => {
	test("quita +, espacios y guiones", () => {
		expect(normalizePhone("+57 316 512 2359")).toBe("573165122359");
	});

	test("devuelve los dígitos si ya están limpios", () => {
		expect(normalizePhone("573000000000")).toBe("573000000000");
	});
});

describe("buildWhatsAppUrl", () => {
	test("usa el teléfono por defecto y codifica el mensaje", () => {
		const url = buildWhatsAppUrl("Hola Officplastic");
		expect(url).toBe(
			`https://wa.me/${OFFICPLASTIC_PHONE}?text=Hola%20Officplastic`,
		);
	});

	test("acepta un teléfono custom", () => {
		expect(buildWhatsAppUrl("Hola", "573001112233")).toContain(
			"wa.me/573001112233",
		);
	});

	test("normaliza el teléfono con + y espacios", () => {
		expect(buildWhatsAppUrl("Hola", "+57 316 512 2359")).toContain(
			"wa.me/573165122359",
		);
	});
});

describe("buildEmailUrl", () => {
	test("construye mailto con asunto y cuerpo codificados", () => {
		const url = buildEmailUrl("Hola Officplastic");
		expect(url).toContain(`mailto:${OFFICPLASTIC_EMAIL}`);
		expect(url).toContain("subject=");
		expect(url).toContain("body=");
		expect(url).toContain("%20");
	});
});
