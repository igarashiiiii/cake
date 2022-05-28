
// import global state from here
import { useContext } from 'react';
import { ProductInformations } from '../../globalState/globalProductInfo';
// import global state to here

//import from MUI from here 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
//import from MUI to here 


export const AdsCards = () =>  {
  let {productInfo} = useContext(ProductInformations)
  return (
    <Card sx={{ maxWidth: 250, boxShadow: 3}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={productInfo[0].productPicture}
          alt="produxts"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productInfo[0].productTitle}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
          {productInfo[0].productPrice}円
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
