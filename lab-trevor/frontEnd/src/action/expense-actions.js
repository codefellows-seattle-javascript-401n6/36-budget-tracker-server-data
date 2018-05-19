export const EXPENSE_CREATE = 'EXPENSE_CREATE';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_DELETE = 'EXPENSE_DELETE';


export function exCreate(data) {
	return {type: EXPENSE_CREATE, data}
}

export function exUpdate(data) {
	return {type: EXPENSE_UPDATE, data}
}

export function exDelete(data) {
	return {type: EXPENSE_DELETE, data}
}