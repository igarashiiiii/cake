import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';

//import productInformation from global state from here
import { useContext } from 'react'
import { ProductInformations } from '../../globalState/globalProductInfo'
import { ShowModal } from './modal';
//import productInformation from global state to here

let cardStyle = {
  display: 'block',
}

export const AdDetailsCards = () =>  {
  let {productInfo} = useContext(ProductInformations)
  //Firebaseから情報をとってくるまで、表示するidを静的に示す
  let productId:string = '0'
  return (
    <Card sx={{ maxWidth: '100%'}} style={cardStyle}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Title <br />
            productIdを静的に固定:{productId}
          </Typography>
          <CardMedia
          component="img"
          height="30%"
          image={productInfo[productId].productPicture}
          alt="produxts"
        />
          <Typography gutterBottom variant="h5" component="div">
          {productInfo[productId].productPrice}円
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          {productInfo[productId].productTitle}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          {productInfo[productId].productPlace}
          </Typography>
          <CardActions>
            <ShowModal/>
          </CardActions>
        </CardContent>
    </Card>
  );
}
