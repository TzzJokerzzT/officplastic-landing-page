export type ClassValue = string | number | boolean | null | undefined;

export function cn(...values: ClassValue[]): string {
	return values.filter((value) => Boolean(value)).join(" ");
}
