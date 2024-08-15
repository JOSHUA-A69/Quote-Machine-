/*import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuote } from '../redux/actions';

const QuoteBox = ({ quote, author, fetchQuote }) => {
  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return (
    <div className="quote-box">
      <p>{quote}</p>
      <p>- {author}</p>
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  quote: state.quote.text,
  author: state.quote.author,
});

const mapDispatchToProps = {
  fetchQuote,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox);*/

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
