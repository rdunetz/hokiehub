import './Dining.css';
import Button from '@mui/material/Button';
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
import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function Dining() {   

    const topDiningHalls = [
        { label: 'West End', location: 'S. Quad' },
        { label: 'Owens Food Court', location: 'E Campus' },
        { label: 'Dietrick Hall', location: 'Drillfield' },
        { label: 'Squires Food Court', location: 'Squires' },
        { label: 'Turner Place', location: 'Turner' },
        { label: 'D2', location: 'D2' },
        { label: 'Perry Place', location: 'Perry' },
    ];

    const diningHalls = [
        { label: 'West End', path: 'westend', title: 'West End', subheader: 'S. Quad • Open until 12 AM', description: 'this is west end', rating: 5, img: 'https://dining.vt.edu/content/dining_vt_edu/en/dining_centers/west_end/_jcr_content/article-image.transform/l-medium/image.jpg' },
        { label: 'Owens Food Court', path: 'owensfoodcourt', title: 'Owens Food Court', subheader: 'S. Quad • Open until 12 AM', description: 'this is west end', rating: 5, img: 'https://vt.edu/content/dam/vt_edu/about/buildings/images/owens-2011.jpg.transform/l-medium/image.jpg' },
        { label: 'Dietrick Hall', path: 'dietrickhall', title: 'Dietrick Hall', subheader: 'S. Quad • Open until 12 AM', description: 'this is dietrick hall', rating: 5, img: 'https://dining.vt.edu/content/dining_vt_edu/en/dining_centers/dietrick-hall/_jcr_content/article-image.transform/l-medium/image.jpg' },
        { label: 'Squires Food Court', path: 'squiresfoodcourt', title: 'Squires Food Court', subheader: 'S. Quad • Open until 12 AM', description: 'this is squires', rating: 5, img: 'https://dining.vt.edu/content/dining_vt_edu/en/dining_centers/squires/_jcr_content/article-image.transform/m-medium/image.jpg' },
        { label: 'Turner Place', path: 'turnerplace', title: 'Turner Place', subheader: 'S. Quad • Open until 12 AM', description: 'this is turner', rating: 5, img: 'https://dining.vt.edu/content/dining_vt_edu/en/dining_centers/turner/_jcr_content/article-image.transform/l-medium/image.jpg' },
        { label: 'D2', path: 'd2', title: 'D2', subheader: 'S. Quad • Open until 12 AM', description: 'this is D2', rating: 5, img: 'https://bloximages.newyork1.vip.townnews.com/collegiatetimes.com/content/tncms/assets/v3/editorial/f/0f/f0f33686-1a5b-11e7-b670-c7197a2964da/58e5850f4d9b4.image.jpg?crop=1763%2C926%2C0%2C124&resize=1200%2C630&order=crop%2Cresize' },
        { label: 'Perry Place', path: 'perryplace', title: 'Perry Place', subheader: 'Perry • Open until 12 AM', description: 'this is perry', rating: 5, img: 'https://dining.vt.edu/content/dining_vt_edu/en/dining_centers/perryplace/_jcr_content/article-image.transform/m-medium/image.jpg' },
    ];

    const [reviews, setReviews] = useState([]);

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

    return (
        <div className="Dining">
            <h1>Dining Halls</h1>
                {diningHalls.map((diningHall) => (
                //   <Grid item xs={12} sm={6} md={4}>
                  <Link to={`/dining/${diningHall.path}`} key={diningHall.path} style={{ textDecoration: 'none' }}>
                  <Card className='container'>
                      <CardMedia
                          component="img"
                          height="200"
                          image={diningHall.img}
                      />

                      <CardHeader
                          title={diningHall.label}
                          subheader={diningHall.subheader}
                      />

                      <CardContent>
                          <Rating value={diningHall.rating} readOnly />
                          <Typography>{diningHall.description}</Typography>
                          {/* Other content like chips, text fields, etc. */}
                      </CardContent>

                      <CardActions>
                          
                          <Button>Write Review</Button>
                      </CardActions>
                  </Card>
                    </Link>
            //   </Grid>
              ))}
            </div>
    );
}