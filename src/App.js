import React from 'react';
import { Provider } from 'react-redux';
import { Container } from '@mui/material';
import CardList from './components/CardList';
import store from './redux/store';
import backgroundImage from './components/feather-3010848.jpg';

function App() {
  return (
    // Set up the Redux store provider
    <Provider store={store}>
      {/* Use a container with a background image */}
      <div style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),url(${backgroundImage})`, minHeight: '100vh', backgroundSize: '100% 100%' }}>
        <Container maxWidth="lg" sx={{ paddingTop: '32px' }}>
          {/* Render the CardList component */}
          <CardList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
