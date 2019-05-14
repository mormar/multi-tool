import React from 'react';
import Deposit from './components/Deposit';
import Header from './layouts/Header';
import GlobalStyle from "./Global"

function App() {
  return (
    <div>
      <Header/>
      <Deposit/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
