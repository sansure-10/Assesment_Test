import React from 'react';
import { Modal, Box } from '@mui/material';

const CardModal = ({ isOpen, onClose, children }) => {
  return (
    // Modal component from MUI, controlled by isOpen and onClose props
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          // Styling for the modal content
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          borderRadius: '4px',
          boxShadow: '24px 24px 48px rgba(0, 0, 0, 0.1)',
          outline: 'none',
          overflowY: 'auto',
          maxHeight: '80vh',
          width: '80%',
          maxWidth: '600px',
          p: 2,
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};

export default CardModal;
