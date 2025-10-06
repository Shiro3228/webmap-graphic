import type ISymbol from "./isymbol.js";

export default interface ISymbolSet<T = string> {
	getSymbol(id: T): ISymbol<T>;
	getId(): T;
}
