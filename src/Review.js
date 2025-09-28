import React, { useState } from 'react';
import { Box, TextField, Button, Rating, Typography, Stack, Autocomplete } from '@mui/material';
import axios from 'axios';

const ReviewForm = () => {

  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const diningHalls = [
    { label: 'West End', value: "West" },
    { label: 'Owens Food Court', value: "Owens" },
    { label: 'Dietrick Hall', value: "Dietrick" },
    { label: 'Squires Food Court', value: "Squires" },
    { label: 'Turner Place', value: "Turner" },
    { label: "D2", value: "D2" },
    { label: 'Perry Place', value: "Perry" },
  ]

  const handleSubmit = (event) => {

    event.preventDefault();

    const res = sendData(location, rating, image, description);

    setLocation('');
    setRating(0);
    setImage('');
    setDescription('');

    if (res !== null) {
      alert("Review submitted successfully!");
      window.history.back();
    } else {
      alert("Failed to submit review. Please try again.");
    }

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
      return res;
    } catch (err) {
      console.error(err);
      return null;
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
        mx: 'auto',
        marginTop: '30px',
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        Leave a Review
      </Typography>

      <Stack spacing={2}>
        <Autocomplete
          disablePortal
          options={diningHalls}
          getOptionLabel={(option) => option.label}
          sx={{ width: '100%' }}
          value={diningHalls.find((hall) => hall.value === location) || null}
          onChange={(event, newValue) => {
            setLocation(newValue ? newValue.value : '');
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Dining Hall"
              required
            />
          )}
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
        sx={{ mt: 2 }}
      >
        Submit Review
      </Button>
    </Box>
  );
};

export default ReviewForm;