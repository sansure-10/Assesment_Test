import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { addCard, deleteCard } from '../redux/actions';
import Card from './Card';
import CardModal from './CardModal';
import CardForm from './CardForm';
import image1 from './drishyam.jpg'
import image2 from './pulimurugan.jpg'
import image3 from './2018.jpg'
import image4 from './BEESHMAPARVAM.png'

const CardList = () => {
  const cards = useSelector((state) => state.cards);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  // Function to handle creating a new card
  const handleCreateCard = (newCard) => {
    dispatch(addCard(newCard)); // Dispatching the addCard action with the new card data
    setIsModalOpen(false); // Closing the modal after creating the card
  };

  // Function to handle deleting a card
  const handleDeleteCard = (cardId) => {
    dispatch(deleteCard(cardId)); // Dispatching the deleteCard action with the card ID
  };

  useEffect(() => {
    // Initial cards data
    const initialCards = [

      {
        id: 1,
        title: 'Pulimurugan',
        description: 'Mohanlal Movie',
        duration: 190,
        genre: 'Action',
        image: image2
      },
      {
        id: 2,
        title: 'BheeshmaParvam',
        description: 'Malayalam Movie',
        duration: 175,
        genre: 'Action',
        image: image4
      },
      {
        id: 3,
        title: 'Drishyam',
        description: 'Mohanlal Movie',
        duration: 160,
        genre: 'Thriller',
        image: image1
      },
      {
        id: 4,
        title: '2018',
        description: 'Tovino Movie',
        duration: 120,
        genre: 'Drama',
        image: image3
      },
    ];

    initialCards.forEach((card) => dispatch(addCard(card)));

  }, [dispatch]);

  return (
    <div>
      {/* Button to open the create card modal */}
      <Button variant="contained" onClick={() => setIsModalOpen(true)}>
        Create Card
      </Button>
      {/* Grid container to display the list of cards */}
      <Grid container spacing={2} sx={{ marginTop: '16px' }}>
        {/* Mapping through the cards array and rendering a Card component for each card */}
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
            {/* Card component to display the card details */}
            <Card card={card} onDelete={() => handleDeleteCard(card.id)} />
          </Grid>
        ))}
      </Grid>
      {/* Modal for creating a new card */}
      <CardModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {/* CardForm component for entering the new card details */}
        <CardForm onSubmit={handleCreateCard} />
      </CardModal>
    </div>
  );
};

export default CardList;
