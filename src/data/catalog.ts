import type { Product } from "./site";
import { site } from "./site";

export interface ProductRoute {
	params: { reference: string };
	props: { product: Product };
}

/**
 * Genera las rutas estáticas del catálogo.
 *
 * Si hay referencias duplicadas en `site.json`, solo la primera genera una
 * página (evita rutas duplicadas que romperían el build).
 */
export function getProductRoutes(): ProductRoute[] {
	const seen = new Set<string>();
	return site.catalog.products
		.filter((product) => {
			if (seen.has(product.reference)) {
				return false;
			}
			seen.add(product.reference);
			return true;
		})
		.map((product) => ({
			params: { reference: product.reference },
			props: { product },
		}));
}

/**
 * Devuelve los productos que comparten una referencia (duplicados en el JSON).
 */
export function findProductsByReference(reference: string): Product[] {
	return site.catalog.products.filter((p) => p.reference === reference);
}

/**
 * Devuelve productos sugeridos (hasta `limit`), excluyendo el que se muestra.
 */
export function getRelatedProducts(current: Product, limit = 3): Product[] {
	return site.catalog.products
		.filter((p) => p.name !== current.name)
		.slice(0, limit);
}
