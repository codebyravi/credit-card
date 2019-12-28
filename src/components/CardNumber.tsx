import React from 'react';
import styled from 'styled-components';

interface IProps {
	cardNumber: string;
}

const CardNumberContainer = styled.div`
	grid-column: 1 / -1;
	grid-row: 2 / 3;
	align-self: end;
	margin-bottom: 10px;
`;

const CardNumberText = styled.div`
	font-size: 25px;
	color: silver;
`;

const CardNumber: React.FC<IProps> = ({ cardNumber }) => {
	return (
		<CardNumberContainer>
			<CardNumberText>{cardNumber}</CardNumberText>
		</CardNumberContainer>
	);
};

export default CardNumber;
