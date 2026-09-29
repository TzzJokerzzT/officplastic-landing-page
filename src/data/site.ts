import type { Cta } from "../lib/cta";
import { resolveCtaHref } from "../lib/cta";
import rawSite from "./site.json";

interface NavLink {
	label: string;
	href: string;
}

interface ShowcaseItem {
	icon: string;
	title: string;
}

interface Stat {
	value: string;
	label: string;
}

interface Category {
	icon: string;
	title: string;
	description: string;
}

interface Product {
	name: string;
	reference: string;
	category: string;
	description?: string;
	image?: string;
	imageAlt?: string;
}

interface WhyItem {
	icon: string;
	title: string;
	description: string;
}

interface Step {
	icon: string;
	title: string;
	description: string;
}

interface ContactInfo {
	icon: string;
	label: string;
	value: string;
}

interface FormFieldData {
	name: string;
	label?: string;
	type?: "text" | "email" | "tel" | "password" | "number" | "url" | "search";
	placeholder?: string;
	required?: boolean;
	optional?: boolean;
	textarea?: boolean;
	autocomplete?: string;
}

interface FooterColumn {
	title: string;
	links: NavLink[];
}

export interface SiteData {
	site: {
		name: string;
		tagline: string;
		language: string;
		contact: {
			whatsapp: string;
			phone: string;
			email: string;
			schedule: string;
		};
	};
	topBar: {
		text: string;
		icon: string;
		logo: string;
	};
	nav: {
		links: NavLink[];
		cta: Cta;
	};
	hero: {
		eyebrow: string;
		titleLine1: string;
		titleLine2: string;
		subtitle: string;
		primaryCta: Cta;
		secondaryCta: Cta;
		showcase: { items: ShowcaseItem[] };
		stats: Stat[];
	};
	categories: Category[];
	catalog: {
		eyebrow: string;
		title: string;
		note: string;
		products: Product[];
	};
	whyUs: {
		eyebrow: string;
		title: string;
		items: WhyItem[];
	};
	howItWorks: {
		eyebrow: string;
		title: string;
		steps: Step[];
	};
	contact: {
		eyebrow: string;
		title: string;
		description: string;
		info: ContactInfo[];
		form: {
			submitLabel: string;
			submitIcon: string;
			fields: FormFieldData[];
		};
	};
	footer: {
		description: string;
		logoIcon: string;
		columns: FooterColumn[];
		copyright: string;
		rightTagline: string;
	};
	whatsappFloat: {
		enabled: boolean;
		message: string;
	};
}

const data: SiteData = rawSite as SiteData;

export const site = data;

export function ctaHref(cta: Cta): string {
	const contact = site.site.contact;
	return resolveCtaHref(cta, contact.whatsapp, contact.email);
}

export type {
	Category,
	ContactInfo,
	Cta,
	FormFieldData,
	NavLink,
	Product,
	Step,
	WhyItem,
};
