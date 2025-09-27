// src/Review.js

import React, { useState } from 'react';
import { Box, TextField, Button, Rating, Typography, Stack } from '@mui/material';
import axios from 'axios';

// The form component
const ReviewForm = () => {
  // State for each input field
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  // Handler for form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission (page reload)
    event.preventDefault();

    // Call the submission function passed via props
    sendData(type, location, rating, image, description);

    // Optional: Clear the form fields after submission
    setType('');
    setLocation('');
    setRating(0);
    setImage('');
    setDescription('');
    window.history.back();

  };

  const sendData = async (location, rating, image, description) => {

    console.log("123")

    const data = {
      "location": location,
      "review": {
        "rating": rating,
        "image": image,
        "description": description
      }
    };

    try {
      const res = await axios.post("http://localhost:3001/addReview", data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: 3,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: 'background.paper',
        maxWidth: '500px',
        mx: 'auto', // Center the form horizontally
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        Leave a Review
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Type (e.g., Restaurant, Park)"
          variant="outlined"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
          fullWidth
        />

        <TextField
          label="Location"
          variant="outlined"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          fullWidth
        />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography component="legend">Rating:</Typography>
          <Rating
            name="review-rating"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        </Box>

        <TextField
          label="Image URL"
          variant="outlined"
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          fullWidth
        />

        <TextField
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          fullWidth
        />
      </Stack>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: 2 }} // Margin top
      >
        Submit Review
      </Button>
    </Box>
  );
};

export default ReviewForm;