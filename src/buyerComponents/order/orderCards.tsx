import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box} from '@mui/material';


export const OrderCards = () =>  {

  return (
    <Card sx={{display: 'flex', boxShadow: 3, borderRadius: 2, m:1, height: '20vh'}}  >
			<CardMedia 
					sx={{ width: "30%" }}
					component="img"
					image="https://source.unsplash.com/random"
					alt="produxts"
					/>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<Typography gutterBottom variant="h5" component="div">
						Title
				</Typography>
				<Typography gutterBottom variant="h5" component="div">
						date
				</Typography>
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
			</Box>
    </Card>
  );
}
