import { FETCH_QUOTE } from './actions';

const initialState = {
  quote: {
    text: 'Loading...',
    author: '',
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTE:
      console.log('Reducer state before update:', state);
      const newState = {
        ...state,
        quote: {
          text: action.payload.text, 
          author: action.payload.author,
        },
      };
      console.log('Reducer state after update:', newState);
      return newState;
    default:
      return state;
  }
};