import React from 'react';
import Months from '../types/months';
import Years from '../types/years';
import styled from 'styled-components';

interface IProps {
	month: Months;
	year: Years;
}

const ExpiryDateContainer = styled.div`
	align-self: center;
`;

const DisplayExpiryDate: React.FC<IProps> = ({ month, year }) => {
	const displayMonth = month === 'Month' ? 'MM' : month;
	const displayedYear = year === 'Year' ? 'YY' : year.slice(2);

	return (
		<ExpiryDateContainer>
			<p>Expires on:</p>
			<p>
				{displayMonth} / {displayedYear}
			</p>
		</ExpiryDateContainer>
	);
};

export default DisplayExpiryDate;
