import React from 'react';
import styled from 'styled-components';

interface IProps {
	month: string;
	year: string;
}

const ExpiryDateContainer = styled.div`
	align-self: center;
	grid-column: 2 / -1;
	grid-row: 3 / -1;
	justify-self: end;
	align-self: center;
`;

const StyledLabel = styled.p`
	text-align: center;
	margin-bottom: 4px;
`;

const ExpiryDate = styled.div`
	text-align: center;
`;

const DisplayExpiryDate: React.FC<IProps> = ({ month, year }) => {
	const displayMonth = month.padEnd(2, '*');
	const displayedYear = year.padEnd(2, '*');

	return (
		<ExpiryDateContainer>
			<StyledLabel>Valid thru:</StyledLabel>
			<ExpiryDate>
				{displayMonth} / {displayedYear}
			</ExpiryDate>
		</ExpiryDateContainer>
	);
};

export default DisplayExpiryDate;
