import React from 'react';
import AppContext from './AppContext';

const AppContextProvider: React.FC = (props) => {
  const [cardNumber, setCardNumber] = React.useState<string>('');
  const [holderName, setHolderName] = React.useState<string>('');

  const value = {
    cardNumber,
    setCardNumber,
    holderName,
    setHolderName,
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
