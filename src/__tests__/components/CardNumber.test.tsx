import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import CardNumber from '../../components/CardNumber';

test('Displays card number correctly', () => {
	const cardNumber = '4537 3731 1138 8015';
	const { container, getByText, debug } = render(
		<CardNumber cardNumber={cardNumber} />
	);
	expect(container).toHaveTextContent(cardNumber);
	debug();
});
