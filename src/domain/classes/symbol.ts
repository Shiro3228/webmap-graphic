import type ISymbol from "../interfaces/isymbol.js";

export default abstract class Symbol<T = string> implements ISymbol<T> {
	id: T;

	constructor(id: T) {
		this.id = id;
	}
}
