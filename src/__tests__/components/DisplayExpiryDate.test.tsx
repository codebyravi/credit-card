import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import DisplayExpiryDate from '../../components/DisplayExpiryDate';
import Months from '../../types/months';
import Years from '../../types/years';

test('Renders month correctly', () => {
	const month: Months = '04';
	const year: Years = '2023';
	const displayedYear = year.slice(2);
	const { container } = render(<DisplayExpiryDate month={month} year={year} />);
	expect(container).toHaveTextContent(`Expires on:${month} / ${displayedYear}`);
});
