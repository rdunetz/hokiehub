import './Home.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Home() {
  return (
    <div className="Home">
        <div className="Home-main">
          <Typography variant="h1" gutterBottom>
            Welcome to HokieHub!
          </Typography>
          <Typography variant="h2" gutterBottom>
            Here you can view student reviews on various food options and 
            buildings on campus. These reviews are created by your fellow students.
          </Typography>
          <Button variant="contained">
            Add a Review!
          </Button>
          <img src="vtMap.png" alt="VT Map" class="small-image"></img>
      </div>
    </div>
  );
}

export default Home;