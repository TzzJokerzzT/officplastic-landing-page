export const THEME_STORAGE_KEY = "officplastic-theme";

export type Theme = "light" | "dark";

export function isTheme(value: string | null): value is Theme {
	return value === "light" || value === "dark";
}

export function getInitialTheme(
	storage: { getItem(key: string): string | null },
	prefersDark: () => boolean = () => false,
): Theme {
	const saved = storage.getItem(THEME_STORAGE_KEY);
	if (isTheme(saved)) {
		return saved;
	}
	return prefersDark() ? "dark" : "light";
}

export function applyTheme(
	theme: Theme,
	element: { dataset: Record<string, string | undefined> },
): void {
	element.dataset.theme = theme;
}

export function toggleTheme(current: Theme): Theme {
	return current === "dark" ? "light" : "dark";
}
