interface ResultUser {
	id: string;
	nome: string;
	email: string;
	code: number;
}

export interface User {
	message: string;
	result: ResultUser;
}
