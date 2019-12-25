import React from 'react';
import AppContext from './AppContext';

import Months from '../types/months';
import Years from '../types/years';

const initialCardNumber = '';
const initialHolderName = 'Ali Ahmed';
const initalMonth: Months = '04';
const initalYear: Years = '2023';

const AppContextProvider: React.FC = props => {
	const [cardNumber, setCardNumber] = React.useState<string>(initialCardNumber);
	const [holderName, setHolderName] = React.useState<string>(initialHolderName);
	const [month, setMonth] = React.useState<Months>(initalMonth);
	const [year, setYear] = React.useState<Years>(initalYear);

	const value = {
		cardNumber,
		setCardNumber,
		holderName,
		setHolderName,
		month,
		setMonth,
		year,
		setYear
	};

	return (
		<AppContext.Provider value={value}>{props.children}</AppContext.Provider>
	);
};

export default AppContextProvider;
