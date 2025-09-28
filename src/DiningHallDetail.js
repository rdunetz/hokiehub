import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './Dining.css';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './DiningHallDetail.css'

function DiningHallDetail() {

  const map = new Map();
  map.set('westend', 'West End');
  map.set('owensfoodcourt', 'Owens Food Court');
  map.set('dietrickhall', 'Dietrick Hall');
  map.set('squiresfoodcourt', 'Squires Food Court');
  map.set('turnerplace', 'Turner Place');
  map.set('d2', 'D2');
  map.set('perryplace', 'Perry Place');

  const [reviews, setReviews] = useState([]);
  useEffect(() => {

    const getCurrentUrlSegment = () => {
      const pathname = window.location.pathname;
      const lastSlashIndex = pathname.lastIndexOf('/');
      if (lastSlashIndex === -1) {
        return pathname;
      }
      return pathname.substring(lastSlashIndex + 1);
    };

    const getData = async (loc) => {
      try {
        const res = await axios.get('http://localhost:3001/reviews', {
          params: { location: loc }
        });
        console.log(res.data);
        setReviews(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    const diningHallName = getCurrentUrlSegment();

    if (!diningHallName) {
      console.warn("No valid dining hall name found in URL.");
      return;
    }

    console.log(diningHallName);
    getData(diningHallName);
  }, []);


  const getCurrentUrlSegment = () => {
    const pathname = window.location.pathname;
    const lastSlashIndex = pathname.lastIndexOf('/');
    if (lastSlashIndex === -1) {
      return pathname;
    }
    return pathname.substring(lastSlashIndex + 1);
  };



  return (
    <div className='dining-detail'>
      <Typography variant="h2" gutterBottom className="dining-detail-title">
        <span className="accent">{map.get(getCurrentUrlSegment())}</span>
      </Typography>
      <Typography variant="body1" gutterBottom className="dining-detail-title">
        These are reviews about this dining hall.
      </Typography>
      <div className='dining-hall-detail'>
        {reviews.map((review) => (
          <Card className='container'>
            <CardMedia
              component="img"
              height="200"
              image={review.image !== "" ? review.image : 'https://st4.depositphotos.com/20523700/25933/i/450/depositphotos_259334152-stock-photo-illustration-camera-icon.jpg'}
            />

            <CardContent>
              <Rating value={review.rating} readOnly />
              <Typography>{review.description}</Typography>
              {/* Other content like chips, text fields, etc. */}
            </CardContent>
          </Card>
          //   </Grid>
        ))}

      </div>
    </div>
  );
}

export default DiningHallDetail;