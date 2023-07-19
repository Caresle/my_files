export default class ErrorMessage {
	static invalidJSON() : string {
		return 'Invalid JSON';
	}

	static required(field: string) : string {
		return `The ${field} is required`;
	}

	static minLength(field: string, value: number) : string {
		return `The ${field} must be greater or equal than ${value}`;
	}

	static maxLength(field: string, value: number) : string {
		return `The ${field} must be equal or lower than ${value}`;
	}

	static between(field: string, min: number, max: number) : string {
		return `The ${field} must be between ${min} and ${max}`;
	}

	static isArray(field: string) : string {
		return `The ${field} must be an array`;
	}

	static exists(data: string, table: string) : string {
		return `The ${data} already exists in ${table} table`;
	}

	static invalid(field: string) : string {
		return `The ${field} provided is invalid`;
	}
}
