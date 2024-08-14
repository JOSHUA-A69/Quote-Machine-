import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../redux/reducers'
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

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox);
