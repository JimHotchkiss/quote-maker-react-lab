// Reducer --> action is like the form
export default (state = [], action) => {
  let quote;
  let index;
  switch (action.type) {
    case "ADD_QUOTE":
      // this is what gets pushed to the state
      return state.concat(action.quote);

    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);

    case "UPVOTE_QUOTE":
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: (quote.votes += 1) }),
        ...state.slice(index + 1)
      ];

    case "DOWNVOTE_QUOTE":
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      if (quote.votes > 0) {
        return [
          ...state.slice(0, index),
          Object.assign({}, quote, { votes: (quote.votes -= 1) }),
          ...state.slice(index + 1)
        ];
      }
      return state;

    default:
      return state;
  }
};
