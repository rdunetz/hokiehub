import './Dining.css';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Dining() {

  const diningHalls = [
    { 
      label: 'West End', 
      path: 'westend', 
      title: 'West End Market', 
      subheader: 'West End • Open until 12 AM', 
      description: 'Upscale dining with made-to-order steaks, pasta, and fresh options in a restaurant-style setting.', 
      rating: 4, 
      img: 'https://dining.vt.edu/content/dining_vt_edu/en/dining_centers/west_end/_jcr_content/article-image.transform/l-medium/image.jpg' 
    },
    { 
      label: 'Owens Food Court', 
      path: 'owensfoodcourt', 
      title: 'Owens Food Court', 
      subheader: 'Central Campus • Open until 10 PM', 
      description: 'Large food court with diverse options including burgers, international cuisine, and comfort food.', 
      rating: 2.5, 
      img: 'https://vt.edu/content/dam/vt_edu/about/buildings/images/owens-2011.jpg.transform/l-medium/image.jpg' 
    },
    { 
      label: 'Dietrick Hall', 
      path: 'dietrickhall', 
      title: 'Dietrick Hall (DX)', 
      subheader: 'Dietrick Plaza • Open until 11 PM', 
      description: 'One of the largest dining centers on campus with all-you-care-to-eat stations and grab-and-go choices.', 
      rating: 3.5, 
      img: 'https://dining.vt.edu/content/dining_vt_edu/en/dining_centers/dietrick-hall/_jcr_content/article-image.transform/l-medium/image.jpg' 
    },
    { 
      label: 'Squires Food Court', 
      path: 'squiresfoodcourt', 
      title: 'Squires Food Court', 
      subheader: 'Squires Student Center • Open until 9 PM', 
      description: 'Convenient dining in the student center with quick-service restaurants and popular chains.', 
      rating: 2, 
      img: 'https://dining.vt.edu/content/dining_vt_edu/en/dining_centers/squires/_jcr_content/article-image.transform/m-medium/image.jpg' 
    },
    { 
      label: 'Turner Place', 
      path: 'turnerplace', 
      title: 'Turner Place', 
      subheader: 'Academic Side • Open until 11 PM', 
      description: 'Multi-level dining venue featuring diverse cuisines from sushi and hibachi to Italian and deli favorites.', 
      rating: 5, 
      img: 'https://dining.vt.edu/content/dining_vt_edu/en/dining_centers/turner/_jcr_content/article-image.transform/l-medium/image.jpg' 
    },
    { 
      label: 'D2', 
      path: 'd2', 
      title: 'D2', 
      subheader: 'Dietrick Hall • Open until 8 PM', 
      description: 'All-you-care-to-eat buffet with international and classic American dishes, located above DX.', 
      rating: 4, 
      img: 'https://bloximages.newyork1.vip.townnews.com/collegiatetimes.com/content/tncms/assets/v3/editorial/f/0f/f0f33686-1a5b-11e7-b670-c7197a2964da/58e5850f4d9b4.image.jpg?crop=1763%2C926%2C0%2C124&resize=1200%2C630&order=crop%2Cresize' 
    },
    { 
      label: 'Perry Place', 
      path: 'perryplace', 
      title: 'Perry Place', 
      subheader: 'East Campus • Open until 10 PM', 
      description: 'Newest dining facility featuring a food-hall style experience with global flavors and fresh ingredients.', 
      rating: 5, 
      img: 'https://dining.vt.edu/content/dining_vt_edu/en/dining_centers/perryplace/_jcr_content/article-image.transform/m-medium/image.jpg' 
    },
  ];
  

  return (
    <div className="Dining">
      <Typography variant="h2" gutterBottom className="dining-title">
        <span className="accent">Dining Halls</span>
      </Typography>
      <Typography variant="body1" gutterBottom className="dining-detail-title">
        This is a list about all dining halls on campus.
      </Typography>
      <div className='dining-halls'>
        {diningHalls.map((diningHall) => (
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
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}