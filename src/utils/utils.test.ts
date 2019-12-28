import { formatCardNumber, formatDisplayedNumber, formatValidThru } from "./utils";

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

});

describe('Test formatDisplayedNumber', () => {
	test('should display card number correctly', () => {
		const cardNumber = '1234 56';
		const res = formatDisplayedNumber(cardNumber);
		expect(res).toBe('1234 56** **** ****');
	});

	test('should display full card Number correctly', () => {
		const cardNumber = '1234 1234 1234 1234';
		const res = formatDisplayedNumber(cardNumber);
		expect(res).toBe(cardNumber);
	});

	test('should display default displayedCardNumber correctly', () => {
		const cardNumber = '';
		const res = formatDisplayedNumber(cardNumber);
		expect(res).toBe('**** **** **** ****');
	});

});

describe('Test formatValidThru', () => {

	const divider = ' / ';

	test('should add the divider after two digits', () => {
		const prev = '1';
		const curr = '12';
		const res = formatValidThru(prev, curr);
		expect(res).toBe(curr + divider);
	});

	test('should remove the divider adter year is removed', () => {
		const prev = '04' + divider + '2';
		const curr = '04' + divider;
		const res = formatValidThru(prev, curr);
		expect(res).toBe('04');
	})


})