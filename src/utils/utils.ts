import { init, last } from 'ramda';

export const formatCardNumber = (prev: string, current: string): string => {
	let c = current.length;
	let p = prev.length;

	if (isAlpha(last(current))) return prev;

	if (c > 19) {
		return prev;
	}
	if (c > p) {
		if (p === 3 || p === 8 || p === 13) {
			return current + " ";
		} else {
			return current;
		}
	} else if (p > c) {
		if (p === 6 || p === 11 || p === 16) {
			return init(current);
		}
	}
	return current;
}

export function isWhiteSpace(str: string): boolean {
	return /[\s]/.test(str);
}

export function isAlpha(str: string): boolean {
	return /[a-zA-Z]/g.test(str);
}