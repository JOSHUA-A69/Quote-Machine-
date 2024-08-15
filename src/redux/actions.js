/*export const FETCH_QUOTE = 'FETCH_QUOTE';

export const fetchQuote = () => async (dispatch) => {
  try {
    const response = await fetch('https://quotes.rest/qod?category=inspire', {
      headers: {
        'Authorization': '7yCvvlWVEPhd2Egqq4YjJbbVznYztfPIqL5FkeOS',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('API Response:', data); // Log the response


    if (data.contents && data.contents.quotes && data.contents.quotes.length > 0) {
      const { quote: text, author } = data.contents.quotes[0]; 
      dispatch({
        type: FETCH_QUOTE,
        payload: { text, author },
      });
    } else {
      console.error('No quotes found');
    }
  } catch (error) {
    console.error('Failed to fetch quote:', error);
  }
};*/

import { mcuQuotes } from './quotes';

export const FETCH_QUOTE = 'FETCH_QUOTE';

export const fetchQuote = () => {
  const randomIndex = Math.floor(Math.random() * mcuQuotes.length);
  const randomQuote = mcuQuotes[randomIndex];
  
  return {
    type: FETCH_QUOTE,
    payload: randomQuote,
  };
};