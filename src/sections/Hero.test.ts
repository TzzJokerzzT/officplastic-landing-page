import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";
import { site } from "../data/site";
import Hero from "./Hero.astro";

describe("Hero", () => {
	test("renderiza títulos, subtítulo, CTAs y stats desde el JSON", async () => {
		const container = await AstroContainer.create();
		const html = await container.renderToString(Hero);

		expect(html).toContain(site.hero.titleLine1);
		expect(html).toContain(site.hero.titleLine2);
		expect(html).toContain(site.hero.subtitle);
		expect(html).toContain(site.hero.primaryCta.label);
		expect(html).toContain(site.hero.secondaryCta.label);
		expect(html).toContain("wa.me/");
		expect(html).toContain("#catalogo");

		for (const stat of site.hero.stats) {
			expect(html).toContain(stat.value);
		}
	});
});
