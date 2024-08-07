import { FETCH_QUOTE } from './actions';

const initialState = {
  quote: '',
  author: '',
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTE:
      return {
        ...state,
        quote: action.payload.content,
        author: action.payload.author,
      };
    default:
      return state;
  }
};

export default quoteReducer;
