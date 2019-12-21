import React from 'react';
import AppContext from '../context/AppContext';
import DisplayExpiryDate from './DisplayExpiryDate';
import styled from 'styled-components';
import CardNumber from './CardNumber';

const CardBody = styled.div`
	margin: 0 auto 20px;
	border: 1px solid black;
	width: 400px;
	height: 225px;
	border-radius: 10px;
	padding: 5px 10px;
	display: flex;
	flex-direction: column;
	background-color: steelblue;
`;

const Card: React.FC = () => {
	const { cardNumber, holderName, month, year } = React.useContext(AppContext);
	return (
		<CardBody>
			<CardNumber cardNumber={cardNumber} />
			<DisplayExpiryDate month={month} year={year} />
			<div>
				<p>{holderName}</p>
			</div>
		</CardBody>
	);
};

export default Card;
