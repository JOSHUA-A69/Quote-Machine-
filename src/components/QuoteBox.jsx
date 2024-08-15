import React from 'react';
import { connect } from 'react-redux';
import { fetchQuote } from '../redux/actions';
import '../App.css'; 

const QuoteBox = ({ currentQuote, fetchQuote }) => {
  return (
    <div className="App">
      <h1>Marvel Cinematic Universe Quotes</h1>
      <div className="quote-box">
        <p>"{currentQuote.text}"</p>
        <p>- {currentQuote.author}</p>
        <button onClick={fetchQuote}>New Quote</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentQuote: state.currentQuote
  };
};

const mapDispatchToProps = {
  fetchQuote
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox);
