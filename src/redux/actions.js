export const FETCH_QUOTE = 'FETCH_QUOTE';

export const fetchQuote = () => async (dispatch) => {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  dispatch({
    type: FETCH_QUOTE,
    payload: data,
  });
};
