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
    { label: 'West End', path: 'westend', title: 'West End', subheader: 'S. Quad • Open until 12 AM', description: 'this is west end', rating: 4, img: 'https://dining.vt.edu/content/dining_vt_edu/en/dining_centers/west_end/_jcr_content/article-image.transform/l-medium/image.jpg' },
    { label: 'Owens Food Court', path: 'owensfoodcourt', title: 'Owens Food Court', subheader: 'S. Quad • Open until 12 AM', description: 'this is west end', rating: 2.5, img: 'https://vt.edu/content/dam/vt_edu/about/buildings/images/owens-2011.jpg.transform/l-medium/image.jpg' },
    { label: 'Dietrick Hall', path: 'dietrickhall', title: 'Dietrick Hall', subheader: 'S. Quad • Open until 12 AM', description: 'this is dietrick hall', rating: 3.5, img: 'https://dining.vt.edu/content/dining_vt_edu/en/dining_centers/dietrick-hall/_jcr_content/article-image.transform/l-medium/image.jpg' },
    { label: 'Squires Food Court', path: 'squiresfoodcourt', title: 'Squires Food Court', subheader: 'S. Quad • Open until 12 AM', description: 'this is squires', rating: 2, img: 'https://dining.vt.edu/content/dining_vt_edu/en/dining_centers/squires/_jcr_content/article-image.transform/m-medium/image.jpg' },
    { label: 'Turner Place', path: 'turnerplace', title: 'Turner Place', subheader: 'S. Quad • Open until 12 AM', description: 'this is turner', rating: 5, img: 'https://dining.vt.edu/content/dining_vt_edu/en/dining_centers/turner/_jcr_content/article-image.transform/l-medium/image.jpg' },
    { label: 'D2', path: 'd2', title: 'D2', subheader: 'S. Quad • Open until 12 AM', description: 'this is D2', rating: 4, img: 'https://bloximages.newyork1.vip.townnews.com/collegiatetimes.com/content/tncms/assets/v3/editorial/f/0f/f0f33686-1a5b-11e7-b670-c7197a2964da/58e5850f4d9b4.image.jpg?crop=1763%2C926%2C0%2C124&resize=1200%2C630&order=crop%2Cresize' },
    { label: 'Perry Place', path: 'perryplace', title: 'Perry Place', subheader: 'Perry • Open until 12 AM', description: 'this is perry', rating: 5, img: 'https://dining.vt.edu/content/dining_vt_edu/en/dining_centers/perryplace/_jcr_content/article-image.transform/m-medium/image.jpg' },
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