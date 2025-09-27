import './Home.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import axios from 'axios';
import { useState } from 'react';

function Home() {
  const [response, setResponse] = useState(null);

  const sendData = async (type, location, rating, image, description) => {
    const data = {
      "type": type,
      "location": location,
      "review": {
        "rating": rating,
        "image": image,
        "description": description
      }
    };

    try {
      const res = await axios.post("http://localhost:3001/addReview", data);
      setResponse(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container maxWidth={false} className="Home">
      <Box className="Home-main">
        <Typography variant="h2" gutterBottom className="Home-title">
          Welcome to <span className="accent">HokieHub</span>!
        </Typography>

        <Typography variant="h5" gutterBottom className="Home-subtitle">
          Discover authentic student reviews on dining, gyms, study spots, and
          more across campus. All written by fellow Hokies, for Hokies.
        </Typography>

        <img src="vtMap.png" alt="VT Map" className="Home-image" />
      </Box>
    </Container>
  );
}

export default Home;
