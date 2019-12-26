import React from 'react';
import AppContext from '../context/AppContext';
import DisplayExpiryDate from './DisplayExpiryDate';
import styled from 'styled-components';
import CardNumber from './CardNumber';
import image from '../assets/chip2.png';

const CardBody = styled.div`
	margin: 0 auto 20px;
	width: 400px;
	height: 225px;
	border-radius: 10px;
	padding: 10px 20px;
	display: flex;
	flex-direction: column;
	background-color: gray;
	box-shadow: 2px 5px 20px 5px rgba(0, 0, 0, 0.4);
`;

const Chip = styled.div`
	background-image: url(${image});
	width: 40px;
	height: 40px;
`;

const Card: React.FC = () => {
	const { displayedCardNumber, displayedName, month, year } = React.useContext(
		AppContext
	);
	return (
		<CardBody>
			<Chip />
			<CardNumber cardNumber={displayedCardNumber} />
			<DisplayExpiryDate month={month} year={year} />
			<div>
				<p>{displayedName}</p>
			</div>
		</CardBody>
	);
};

export default Card;
