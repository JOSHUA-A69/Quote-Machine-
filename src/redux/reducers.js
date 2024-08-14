import { FETCH_QUOTE } from './actions';

const initialState = {
  quote: {
    text: '',
    author: '',
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTE:
      return {
        ...state,
        quote: {
          text: action.payload.content, 
          author: action.payload.author, 
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
