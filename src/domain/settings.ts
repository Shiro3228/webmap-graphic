import type SymbolSet from "./classes/symbolSet.js";
import type ISymbolSet from "./interfaces/isymbolSet.js";

class WebMapSettings {
	private static symbolSets: SymbolSet[] = [];

	public static RegisterSymbolSet(set: ISymbolSet) {
		const exists = WebMapSettings.symbolSets.find(
			(e) => e.getId() == set.getId()
		);
		if (exists) {
			console.warn(`Set with ${set.getId()} already registered`);
			return;
		}

		WebMapSettings.symbolSets.push(set);
	}

	public static UnregisterSymbolSet<T>(idOrSet?: T | ISymbolSet<T>): void {
		if (!idOrSet) return;
		if (this.isSymbolSet(idOrSet)) {
			WebMapSettings.UnregisterSymbolSet(idOrSet.getId());
			return;
		}

		WebMapSettings.symbolSets.filter((e) => e.getId() == idOrSet);
	}

	private static isSymbolSet<T>(obj: object): obj is ISymbolSet<T> {
		return (
			"getId" in obj &&
			typeof obj.getId === "function" &&
			"getSymbol" in obj &&
			typeof obj.getSymbol === "function"
		);
	}
}
