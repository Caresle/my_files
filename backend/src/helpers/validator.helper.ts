export default class Validator {
	static empty(value : string | number) : boolean {
		if (
			value === undefined
			|| value === null
			|| value === ''
		) return true;
		return false;
	}

	static minLength(value : string | Array<unknown>, length : number) : boolean {
		if (value.length >= length) return true;
		return false;
	}

	static maxLength(value : string, length : number) : boolean {
		if (value.length <= length) return true;
		return false;
	}

	static betweenLength(value: string, min: number, max: number) : boolean {
		if (
			Validator.minLength(value, min)
			&& Validator.maxLength(value, max)
		) return true;
		return false;
	}

	/**
	 * If the value given is 0 will return true
	 * @param value { number }
	 * @returns
	 */
	static isPositive(value: number) : boolean {
		return value >= 0;
	}

	static isArray(value: unknown) : boolean {
		if (value instanceof Array) return true;
		return false;
	}
}
