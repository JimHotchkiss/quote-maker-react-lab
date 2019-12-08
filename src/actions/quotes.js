// TODO: Create action creators as defined in tests
export const addQuote = quote => {
  // This is from the QuoteForm

  return {
    type: "ADD_QUOTE",
    quote: Object.assign({}, quote)
  };
};
