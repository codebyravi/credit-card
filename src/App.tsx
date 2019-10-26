import React from 'react';

import FormContainer from './components/FormContainer';
import Card from './components/Card';

import './App.css';
import AppContextProvider from './context/AppContextProvider';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <AppContextProvider>
          <Card />
          <FormContainer />
        </AppContextProvider>
      </header>
    </div>
  );
};

export default App;
