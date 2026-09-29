export const OFFICPLASTIC_PHONE = "573000000000";
export const OFFICPLASTIC_EMAIL = "ventas@officplastic.com";

export interface QuoteLine {
	name: string;
	reference: string;
}

export function buildQuoteMessage(product?: QuoteLine, extra?: string): string {
	const base = "Hola Officplastic, quiero una cotización.";
	if (!product) {
		return base;
	}
	const detail = `Me interesa "${product.name}" (ref. ${product.reference}).`;
	return extra ? `${base} ${detail} ${extra}` : `${base} ${detail}`;
}

export function normalizePhone(phone: string): string {
	return phone.replaceAll(/[^\d]/g, "");
}

export function buildWhatsAppUrl(
	message: string,
	phone: string = OFFICPLASTIC_PHONE,
): string {
	return `https://wa.me/${normalizePhone(phone)}?text=${encodeURIComponent(message)}`;
}

export function buildEmailUrl(
	message: string,
	email: string = OFFICPLASTIC_EMAIL,
): string {
	const subject = encodeURIComponent("Solicitud de cotización — Officplastic");
	return `mailto:${email}?subject=${subject}&body=${encodeURIComponent(message)}`;
}
