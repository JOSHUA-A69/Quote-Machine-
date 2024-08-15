import React, { useState, useEffect } from 'react';
import { quotes } from '../quotes';

const QuoteBox = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    console.log('Component Mounted');
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote-box">
      <p>"{quote.text}"</p>
      <p>- {quote.author}</p>
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
};

export default QuoteBox;
