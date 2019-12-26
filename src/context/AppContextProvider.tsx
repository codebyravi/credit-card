import React from 'react';
import AppContext from './AppContext';

import Months from '../types/months';
import Years from '../types/years';
import { formatDisplayedNumber } from '../utils/utils';

const initialCardNumber = '';
const initialDisplayedName = 'Your Name here';
const initalMonth: Months = '04';
const initalYear: Years = '2023';
const initialDisplayed = '**** **** **** ****';

const AppContextProvider: React.FC = props => {
	const [cardNumber, setCardNumber] = React.useState<string>(initialCardNumber);
	const [holderName, setHolderName] = React.useState<string>('');
	const [month, setMonth] = React.useState<Months>(initalMonth);
	const [year, setYear] = React.useState<Years>(initalYear);
	const [displayedCardNumber, setDisplayedCardNumber] = React.useState(
		initialDisplayed
	);
	const [displayedName, setDisplayedName] = React.useState(
		initialDisplayedName
	);

	const value = {
		cardNumber,
		setCardNumber,
		holderName,
		setHolderName,
		month,
		setMonth,
		year,
		setYear,
		displayedCardNumber,
		setDisplayedCardNumber,
		displayedName,
		setDisplayedName
	};

	React.useEffect(() => {
		setDisplayedCardNumber(formatDisplayedNumber(cardNumber));
	}, [cardNumber]);

	React.useEffect(() => {
		if (holderName === '') {
			setDisplayedName(initialDisplayedName);
		} else {
			setDisplayedName(holderName);
		}
	}, [holderName]);

	return (
		<AppContext.Provider value={value}>{props.children}</AppContext.Provider>
	);
};

export default AppContextProvider;
