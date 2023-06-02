const initialState = {
    cards: [], // Initial state with an empty array for storing the cards
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CARD':
        return {
          ...state,
          cards: [action.payload, ...state.cards], // Add the new card to the beginning of the cards array
        };
      case 'DELETE_CARD':
        return {
          ...state,
          cards: state.cards.filter((card) => card.id !== action.payload), // Filter out the card with the specified ID
        };
      default:
        return state; // Return the current state if the action type is not recognized
    }
  };
  
  export default rootReducer;
  