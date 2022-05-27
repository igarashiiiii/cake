import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';

//import productInformation from global state from here
import { useContext } from 'react'
import { ProductInformations } from '../../globalState/productInfo'
//import productInformation from global state to here


let cardStyle = {
  display: 'block',
}

export const AdDetailsCards = () =>  {
  const productInfo = useContext(ProductInformations)
  return (
    <Card sx={{ maxWidth: '100%'}} style={cardStyle}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Title
            {productInfo}
          </Typography>
          <CardMedia
          component="img"
          height="40%"
          image="https://source.unsplash.com/random"
          alt="produxts"
        />
          <Typography gutterBottom variant="h5" component="div">
            price
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            delivery price
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            name
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            place
          </Typography>
          <CardActions>
            <Button >Order</Button>
          </CardActions>
        </CardContent>
    </Card>
  );
}
