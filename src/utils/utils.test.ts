import { formatCardNumber } from "./utils";

describe('Test formatCardNumber', () => {

	test('Adds a space after 4th digit is entered', () => {
		const prev = '123';
		const curr = '1234';
		const res = formatCardNumber(prev, curr);
		expect(res).toBe(curr + " ");
		expect(res).toHaveLength(curr.length + 1);
	});

	test('Adds a space after 8th digit is entered', () => {
		const prev = '1234 567';
		const curr = '1234 5678';
		const res = formatCardNumber(prev, curr);
		expect(res).toBe(curr + " ");
		expect(res).toHaveLength(curr.length + 1);
	});

	test('should add a space after 12th digit is entered', () => {
		const prev = '1234 5678 123';
		const curr = '1234 5678 1234';
		const res = formatCardNumber(prev, curr);
		expect(res).toBe(curr + ' ');
		expect(res).toHaveLength(curr.length + 1);
	});

	test('should not allow additional digits after 16th digit', () => {
		const prev = '1234 5678 9123 4567';
		const curr = '1234 5678 9123 45678';
		const res = formatCardNumber(prev, curr);
		expect(res).toEqual(prev);
	});

	test('should correctly remove the space with the number', () => {
		const prev = '1234 5';
		const curr = '1234 ';
		const res = formatCardNumber(prev, curr);
		expect(res).toBe('1234');
	});

	test('should correctly remove the space with the number', () => {
		const prev = '1234 5678 9';
		const curr = '1234 5678 ';
		const res = formatCardNumber(prev, curr);
		expect(res).toBe('1234 5678');
	});

	test('should correctly remove the space with the number', () => {
		const prev = '1234 5678 9123 1';
		const curr = '1234 5678 9123 ';
		const res = formatCardNumber(prev, curr);
		expect(res).toBe('1234 5678 9123');
	});


	test('should not allow alphabets', () => {
		const prev = '123';
		const curr = '123a';
		const res = formatCardNumber(prev, curr);
		expect(res).toBe(prev);
	});





})
