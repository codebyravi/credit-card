import React from 'react';
import AppContext from '../context/AppContext';
import Months from '../types/months';
import Years from '../types/years';
import styled from 'styled-components';

interface IProps {}

type inputNames = 'cardNumber' | 'holderName';
type selectNames = 'Month' | 'Year';

const FormContainer = styled.div`
	margin: 0 auto;
	width: 100%;
	border: 1px solid blue;
	flex-grow: 1;
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
				<div className="form__cardNumber">
					<label htmlFor="cardNumber">Card Number</label>
					<input
						id="cardNumber"
						name="cardNumber"
						type="text"
						placeholder="Card Number"
						onChange={handleChange}
						value={cardNumber}
					/>
				</div>
				<div className="form__holderName">
					<label htmlFor="holderName">Holder's Name</label>
					<input
						id="holderName"
						name="holderName"
						type="text"
						placeholder="Holder's Name"
						onChange={handleChange}
						value={holderName}
					/>
				</div>
				<div className="form__expirationDate">
					<label htmlFor="expiryMonth">Expiration Date</label>
					<select name="Month" value={month} onChange={handleDateChange}>
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
					</select>
					<select name="Year" value={year} onChange={handleDateChange}>
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
					</select>
				</div>
				<div className="form__cvv">
					<label htmlFor="cvv">CVV</label>
					<input id="cvv" type="text" />
				</div>
			</form>
		</FormContainer>
	);

	function handleDateChange(e: React.FormEvent<HTMLSelectElement>) {
		const { name, value } = e.currentTarget as {
			name: selectNames;
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
			name: inputNames;
			value: string;
		};
		if (name === 'cardNumber') {
			setCardNumber(value);
		} else if (name === 'holderName') {
			setHolderName(value);
		}
	}

	function onFormSubmit(val: any) {
		console.log(val);
	}
};

export default Form;
