// Action creator for adding a card
export const addCard = (card) => {
    return {
      type: 'ADD_CARD', // Action type indicating adding a card
      payload: card, // Data payload containing the card information
    };
  };
  
  // Action creator for deleting a card
  export const deleteCard = (cardId) => {
    return {
      type: 'DELETE_CARD', // Action type indicating deleting a card
      payload: cardId, // Data payload containing the card ID
    };
  };
  