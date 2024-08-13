import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuote } from '../redux/actions';
import '../App.css'

const QuoteBox = () => {
  const dispatch = useDispatch();
  const { quote, author } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  const handleNewQuote = () => {
    dispatch(fetchQuote());
  };

  const tweetQuote = () => {
    const tweet = `“${quote}” — ${author}`;
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
  };

  return (
    <div id="quote-box" className="text-center p-4">
      <div id="text">
        <q>{quote}</q>
      </div>
      <div id="author" className="mt-2">
        - {author}
      </div>
      <button id="new-quote" className="btn btn-primary mt-3" onClick={handleNewQuote}>
        New Quote
      </button>
      <a
        id="tweet-quote"
        className="btn btn-info mt-3"
        href={tweetQuote()}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet Quote
      </a>
    </div>
  );
};

export default QuoteBox;
