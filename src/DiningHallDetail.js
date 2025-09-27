import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './Dining.css';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import useLocation from 'react-router-dom';

function DiningHallDetail() {
  
  const [reviews, setReviews] = useState([]);
        useEffect(() => {

          const getCurrentUrlSegment = () => {
            const pathname = window.location.pathname;
            const lastSlashIndex = pathname.lastIndexOf('/');
            if (lastSlashIndex === -1) {
              return pathname; // No slash found, return the whole path
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
            return; // Stop execution until segment exists
          }

          console.log(diningHallName);
    getData(diningHallName); // Replace with actual dining hall name from route params
  }, []);
      

        

  return (
    <div>
      <h1>Dining Hall Detail Page</h1>
      <p>This will show details about the specific dining hall</p>
      {reviews.map((review) => (
                //   <Grid item xs={12} sm={6} md={4}>
                  <Card className='container'>
                      <CardMedia
                          component="img"
                          height="200"
                          image={review.image !== "" ? review.image : 'https://st4.depositphotos.com/20523700/25933/i/450/depositphotos_259334152-stock-photo-illustration-camera-icon.jpg'}
                      />

                      {/* <CardHeader
                          title={review.location}
                      /> */}

                      <CardContent>
                          <Rating value={review.rating} readOnly />
                          <Typography>{review.description}</Typography>
                          {/* Other content like chips, text fields, etc. */}
                      </CardContent>
                  </Card>
            //   </Grid>
              ))}
    </div>
  );
}

export default DiningHallDetail;