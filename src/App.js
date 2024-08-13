import React from 'react';
import QuoteBox from './components/QuoteBox';
import './App.css'

const App = () => {
  return (
    <div className={`App container d-flex justify-content-center align-items-center vh-100`}>
      <QuoteBox />
    </div>
  );
};

export default App;
