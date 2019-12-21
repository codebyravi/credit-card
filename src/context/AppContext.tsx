import React from 'react';
import Months from '../types/months';
import Years from '../types/years';

interface IAppContext {
	cardNumber: string;
	holderName: string;
	month: Months;
	year: Years;
	setCardNumber: React.Dispatch<React.SetStateAction<string>>;
	setHolderName: React.Dispatch<React.SetStateAction<string>>;
	setMonth: React.Dispatch<React.SetStateAction<Months>>;
	setYear: React.Dispatch<React.SetStateAction<Years>>;
}

const initialContext: IAppContext = {
	cardNumber: '',
	holderName: '',
	month: 'Month',
	year: 'Year',
	setCardNumber: () => {},
	setHolderName: () => {},
	setMonth: () => {},
	setYear: () => {}
};

const AppContext = React.createContext<IAppContext>(initialContext);

export default AppContext;
