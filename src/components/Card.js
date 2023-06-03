import React, { useState } from "react";
import {
  Card as MuiCard,
  CardContent,
  Typography,
  IconButton,
  Modal,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CardModal from "./CardModal";
import CardForm from "./CardForm";
import "./card.css";

const Card = ({ card, onDelete }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [editedCard, setEditedCard] = useState(card);
  const [isHovered, setIsHovered] = useState(false);

  const { id, title, description, duration, genre, image } = editedCard;

  const handleEdit = (event) => {
    event.stopPropagation();
    setIsEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  const handleEditSubmit = (updatedCard) => {
    setEditedCard(updatedCard);
    setIsEditModalOpen(false);
  };

  const handleDetailClick = () => {
    setIsDetailModalOpen(true);
  };

  const handleDetailModalClose = () => {
    setIsDetailModalOpen(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: ` linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)), url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    padding: "16px",
    position: "relative",
    cursor: "pointer",
    transition: "transform 0.3s",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    height: "300px", // Adjust the desired height
    width: "250px", // Adjust the desired width
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: "4px",
    boxShadow: "24px 24px 48px rgba(0, 0, 0, 0.1)",
    outline: "none",
    p: 2,
    maxHeight: "90vh",
    overflow: "auto",
    backgroundSize: "cover",
    width: "447px",
  };

  return (
    <>
      <MuiCard
        variant="outlined"
        sx={cardStyle}
        onClick={handleDetailClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardContent className="card-content">
          {/* Card title */}
          <Typography variant="h6" className="card-title">
            {title}
          </Typography>
          {/* Card description */}
          <div>
            <Typography variant="body2" className="card-description">
              {description.length > 30
                ? `${description.slice(0, 30)}...`
                : description}
            </Typography>
          </div>
          <div>
            <Typography variant="caption" className="card-caption">
              Duration: {duration} mins
            </Typography>
            <br />
            <Typography variant="caption" className="card-caption">
              Genre: {genre}
            </Typography>
          </div>
        </CardContent>
        {isHovered && (
          <div className="card-actions">
            {/* Edit button */}
            <IconButton
              className="edit-button"
              sx={{ color: "grey"}}
              onClick={handleEdit}
            >
              <EditIcon />
            </IconButton>
            {/* Delete button */}
            <IconButton
              className="delete-button"
              sx={{ color: "grey" }}
              onClick={() => onDelete(id)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        )}
      </MuiCard>
      {/* Edit card modal */}
      <CardModal isOpen={isEditModalOpen} onClose={handleEditModalClose}>
        <CardForm card={editedCard} onSubmit={handleEditSubmit} />
      </CardModal>
      {/* Detail modal */}
      <Modal open={isDetailModalOpen} onClose={handleDetailModalClose}>
        <Box sx={modalStyle}>
          {/* Card image */}
          <img
            src={image}
            alt={title}
            style={{ maxWidth: "100%", marginTop: "16px" }}
          />
          {/* Card title */}
          <Typography
            variant="h6"
            sx={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#494B4D",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            {title}
          </Typography>
          {/* Card description */}
          <Typography
            variant="body1"
            sx={{
              fontSize: "18px",
              color: "#939799",
              textOverflow: "ellipsis",
              overflow: "hidden",
              width: "100%",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            {description}
          </Typography>

          {/* Card duration */}
          <Typography
            variant="caption"
            sx={{
              fontSize: "14px",
              color: "#6E7173",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Duration: {duration} mins
          </Typography>
          <br />
          {/* Card genre */}
          <Typography
            variant="caption"
            sx={{
              fontSize: "14px",
              color: "#565859",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Genre: {genre}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Card;
