import React from 'react';
import AppContext from '../context/AppContext';

const Card: React.FC = () => {
  const { cardNumber, holderName } = React.useContext(AppContext);
  return (
    <div className="card">
      <div className="card__number">
        <h3>Card Number:</h3>
        <p>{cardNumber}</p>
      </div>
      <div className="card__holdersName">
        <h3>Card Holder's name:</h3>
        <p>{holderName}</p>
      </div>
      <div className="card__expiryDate">Expiry Date</div>
    </div>
  );
};

export default Card;
