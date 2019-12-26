import React from 'react';
import Months from '../types/months';
import Years from '../types/years';

interface IAppContext {
	cardNumber: string;
	holderName: string;
	month: Months;
	year: Years;
	displayedCardNumber: string;
	displayedName: string;
	setCardNumber: React.Dispatch<React.SetStateAction<string>>;
	setHolderName: React.Dispatch<React.SetStateAction<string>>;
	setMonth: React.Dispatch<React.SetStateAction<Months>>;
	setYear: React.Dispatch<React.SetStateAction<Years>>;
	setDisplayedCardNumber: React.Dispatch<React.SetStateAction<string>>;
	setDisplayedName: React.Dispatch<React.SetStateAction<string>>;
}

const initialContext: IAppContext = {
	cardNumber: '',
	holderName: '',
	month: 'Month',
	year: 'Year',
	setCardNumber: () => {},
	setHolderName: () => {},
	setMonth: () => {},
	setYear: () => {},
	displayedCardNumber: '',
	setDisplayedCardNumber: () => {},
	displayedName: '',
	setDisplayedName: () => {}
};

const AppContext = React.createContext<IAppContext>(initialContext);

export default AppContext;
