import React, { useState, useEffect } from "react";
import { TextField, Button, MenuItem } from "@mui/material";

const CardForm = ({ card, onSubmit }) => {
  const [title, setTitle] = useState(card ? card.title : "");
  const [description, setDescription] = useState(card ? card.description : "");
  const [duration, setDuration] = useState(card ? card.duration : 1);
  const [genre, setGenre] = useState(card ? card.genre : "");
  const [selectedImage, setSelectedImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [durationError, setDurationError] = useState("");

  useEffect(() => {
    if (card && card.image) {
      setSelectedImage(card.image);
      setImagePreview(card.image);
    }
  }, [card]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDurationChange = (e) => {
    const value = e.target.value;
    setDuration(value);

    if (value <= 0) {
      setDurationError("Duration must be greater than zero");
    } else {
      setDurationError("");
    }
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (durationError) {
      return; // Prevent form submission if there's a duration error
    }

    const updatedCard = {
      id: card ? card.id : Date.now(),
      title,
      description,
      duration,
      genre,
      image: selectedImage || (card && card.image),
    };

    onSubmit(updatedCard);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Title TextField */}
      <TextField
        label="Title"
        value={title}
        onChange={handleTitleChange}
        fullWidth
        required
        sx={{ marginBottom: "16px" }}
        InputLabelProps={{ sx: { fontSize: "20px" } }}
        InputProps={{ sx: { fontSize: "24px" } }}
      />

      {/* Description TextField */}
      <TextField
        label="Description"
        value={description}
        onChange={handleDescriptionChange}
        fullWidth
        required
        multiline
        rows={4}
        sx={{ marginBottom: "16px" }}
        InputLabelProps={{ sx: { fontSize: "20px" } }}
        InputProps={{ sx: { fontSize: "16px" } }}
      />

      {/* Duration TextField */}
      <TextField
        label="Duration"
        value={duration}
        onChange={handleDurationChange}
        fullWidth
        required
        type="number"
        sx={{ marginBottom: "16px" }}
        InputLabelProps={{ sx: { fontSize: "20px" } }}
        InputProps={{ sx: { fontSize: "20px" } }}
        error={Boolean(durationError)}
        helperText={durationError}
      />

      {/* Genre TextField */}
      <TextField
        label="Genre"
        value={genre}
        onChange={handleGenreChange}
        fullWidth
        select
        required
        sx={{ marginBottom: "16px" }}
        InputLabelProps={{ sx: { fontSize: "20px" } }}
        SelectProps={{ sx: { fontSize: "20px" } }}
      >
        <MenuItem value="Action">Action</MenuItem>
        <MenuItem value="Comedy">Comedy</MenuItem>
        <MenuItem value="Drama">Drama</MenuItem>
        <MenuItem value="Fantasy">Fantasy</MenuItem>
        <MenuItem value="Horror">Horror</MenuItem>
        <MenuItem value="Mystery">Mystery</MenuItem>
        <MenuItem value="Romance">Romance</MenuItem>
        <MenuItem value="Thriller">Thriller</MenuItem>
      </TextField>

      {/* Image input */}
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleImageChange}
        style={{ marginBottom: "16px" }}
      />

      {/* Image preview */}
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Selected"
          style={{ maxWidth: "100%", marginBottom: "16px" }}
        />
      )}

      {/* Submit button */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginTop: "16px", marginRight: "8px" }}
        disabled={Boolean(durationError)} // Disable the button if there's a duration error
      >
        {durationError ? durationError : "Submit"}
      </Button>
    </form>
  );
};

export default CardForm;
