import { FETCH_QUOTE } from './actions';
import { quotes } from '../quotes';

const initialState = {
  currentQuote: quotes[0]
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTE:
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return {
        ...state,
        currentQuote: quotes[randomIndex]
      };
    default:
      return state;
  }
};

export default quoteReducer;
