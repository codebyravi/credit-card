import React from 'react';

interface IAppContext {
  cardNumber: string;
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  holderName: string;
  setHolderName: React.Dispatch<React.SetStateAction<string>>;
}

const initialContext: IAppContext = {
  cardNumber: '',
  holderName: '',
  setCardNumber: () => {},
  setHolderName: () => {},
};

const AppContext = React.createContext<IAppContext>(initialContext);

export default AppContext;
