import {
	buildEmailUrl,
	buildWhatsAppUrl,
	OFFICPLASTIC_EMAIL,
	OFFICPLASTIC_PHONE,
} from "./quote";

export interface CtaLink {
	label: string;
	type: "link";
	href: string;
}

export interface CtaWhatsApp {
	label: string;
	type: "whatsapp";
	message?: string;
}

export interface CtaEmail {
	label: string;
	type: "email";
	message?: string;
}

export type Cta = CtaLink | CtaWhatsApp | CtaEmail;

export const DEFAULT_QUOTE_MESSAGE =
	"Hola Officplastic, quiero una cotización.";

export function resolveCtaHref(
	cta: Cta,
	phone?: string,
	email?: string,
): string {
	switch (cta.type) {
		case "whatsapp":
			return buildWhatsAppUrl(
				cta.message ?? DEFAULT_QUOTE_MESSAGE,
				phone ?? OFFICPLASTIC_PHONE,
			);
		case "email":
			return buildEmailUrl(
				cta.message ?? DEFAULT_QUOTE_MESSAGE,
				email ?? OFFICPLASTIC_EMAIL,
			);
		case "link":
			return cta.href;
	}
}
