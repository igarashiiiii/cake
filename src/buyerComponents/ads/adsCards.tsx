import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const AdsCards = () =>  {

  return (
    
    <Card sx={{ maxWidth: 250, boxShadow: 3}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://source.unsplash.com/random"
          alt="produxts"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Title
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            price
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
