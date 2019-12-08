// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      // this is what gets pushed to the state
      return state.concat(action.quote);

    case "REMOVE_QUOTE":
      console.log("In the reducer");
  }
  return state;
};
