import React from 'react';
import AppContext from '../context/AppContext';
import Months from '../types/months';
import Years from '../types/years';
import styled from 'styled-components';
import { formatCardNumber } from '../utils/utils';

interface IProps {}

type InputNames = 'cardNumber' | 'holderName';
type SelectNames = 'Month' | 'Year';

const FormContainer = styled.div`
	margin: 0 auto;
	padding: 20px 0;
	width: 100%;
	border: 1px solid blue;
	flex-grow: 1;
	display: flex;
	justify-content: center;
`;

const FormItemContainer = styled.div`
	padding: 10px;
`;

const StyledLabel = styled.label`
	font-size: 20px;
	color: steelblue;
`;

const StyledInput = styled.input`
	padding: 10px 15px;
	color: steelblue;
	font-size: 20px;
	outline: none;
	border: 1px solid steelblue;
	border-radius: 4px;

	&:focus {
		border: 1px solid tomato;
	}
`;

const StyledSelect = styled.select`
	padding: 10px 15px;
	color: steelblue;
	font-size: 20px;
	outline: none;
	border: 1px solid steelblue;
	border-radius: 4px;

	&:focus {
		border: 1px solid tomato;
	}
`;

const Form: React.FC<IProps> = () => {
	const {
		cardNumber,
		setCardNumber,
		holderName,
		setHolderName,
		month,
		setMonth,
		year,
		setYear
	} = React.useContext(AppContext);
	return (
		<FormContainer>
			<form onSubmit={onFormSubmit}>
				<FormItemContainer>
					<StyledLabel htmlFor="cardNumber">Card Number</StyledLabel>
					<StyledInput
						id="cardNumber"
						name="cardNumber"
						type="text"
						placeholder="Card Number"
						onChange={handleChange}
						value={cardNumber}
					/>
				</FormItemContainer>
				<FormItemContainer>
					<StyledLabel htmlFor="holderName">Holder's Name</StyledLabel>
					<StyledInput
						id="holderName"
						name="holderName"
						type="text"
						placeholder="Holder's Name"
						onChange={handleChange}
						value={holderName}
					/>
				</FormItemContainer>
				<FormItemContainer>
					<StyledLabel htmlFor="expiryMonth">Expiration Date</StyledLabel>
					<StyledSelect name="Month" value={month} onChange={handleDateChange}>
						<option disabled selected>
							Month
						</option>
						<option value="01">01</option>
						<option value="02">02</option>
						<option value="03">03</option>
						<option value="04">04</option>
						<option value="05">05</option>
						<option value="06">06</option>
						<option value="07">07</option>
						<option value="08">08</option>
						<option value="09">09</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
					</StyledSelect>
					<StyledSelect name="Year" value={year} onChange={handleDateChange}>
						<option selected disabled>
							Year
						</option>
						<option value="2019">2019</option>
						<option value="2020">2020</option>
						<option value="2021">2021</option>
						<option value="2022">2022</option>
						<option value="2023">2023</option>
						<option value="2024">2024</option>
						<option value="2025">2025</option>
						<option value="2026">2026</option>
						<option value="2027">2027</option>
						<option value="2028">2028</option>
						<option value="2029">2029</option>
						<option value="2030">2030</option>
					</StyledSelect>
				</FormItemContainer>
				<FormItemContainer>
					<StyledLabel htmlFor="cvv">CVV</StyledLabel>
					<StyledInput id="cvv" type="text" />
				</FormItemContainer>
			</form>
		</FormContainer>
	);

	function handleDateChange(e: React.FormEvent<HTMLSelectElement>) {
		const { name, value } = e.currentTarget as {
			name: SelectNames;
			value: Months | Years;
		};
		if (name === 'Month') {
			setMonth(value as Months);
		} else if (name === 'Year') {
			setYear(value as Years);
		}
	}

	function handleChange(e: React.FormEvent<HTMLInputElement>): void {
		const { name, value } = e.currentTarget as {
			name: InputNames;
			value: string;
		};
		if (name === 'cardNumber') {
			setCardNumber(prev => formatCardNumber(prev, value));
		} else if (name === 'holderName') {
			setHolderName(value);
		}
	}

	function onFormSubmit(val: any) {
		console.log(val);
	}
};

export default Form;
