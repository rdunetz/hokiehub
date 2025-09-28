import './Home.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Home() {

  return (
    <Container maxWidth={false} className="Home">
      <Box className="Home-main">
        <Typography variant="h2" gutterBottom className="Home-title">
          Welcome to <span className="accent">HokieHub</span>
        </Typography>

        <Typography variant="h5" gutterBottom className="Home-subtitle">
          Discover authentic student reviews on dining, gyms, study spots, and
          more across campus. All written by fellow Hokies, for Hokies.
        </Typography>

        <Button
          variant="contained"
          size="large"
          className="Home-button"
          href="/Review"
        >
          Add a Review
        </Button>

        <img src="vtMap.png" alt="VT Map" className="Home-image" />
      </Box>
    </Container>
  );
}

export default Home;
