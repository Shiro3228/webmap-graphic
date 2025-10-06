import type ISymbol from "../interfaces/isymbol.js";
import type ISymbolSet from "../interfaces/isymbolSet.js";

export default abstract class SymbolSet<T = string> implements ISymbolSet<T> {
	public abstract getId(): T;
	public abstract getSymbol(id: T): ISymbol<T>;
}
