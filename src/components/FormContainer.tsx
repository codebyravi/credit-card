import React from 'react';
import Form from './Form';
import AppContext from '../context/AppContext';

type inputNames = 'cardNumber' | 'holderName';

const FormContainer: React.FC = () => {
  const { cardNumber, setCardNumber, holderName, setHolderName } = React.useContext(AppContext);
  return (
    <div className="form">
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
          <label htmlFor="expiryDate">Expiration Date</label>
          <input id="expiryDate" type="text" />
        </div>
        <div className="form__expirationYear">
          <label htmlFor="expiryYear">Expiration Date</label>
          <select>
            <option disabled>Month</option>
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
        </div>
        <div className="form__cvv">
          <label htmlFor="cvv">CVV</label>
          <input id="cvv" type="text" />
        </div>
      </form>
    </div>
  );

  function handleChange(e: React.FormEvent<HTMLInputElement>): void {
    const { name, value } = e.currentTarget as { name: inputNames; value: string };
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

export default FormContainer;
