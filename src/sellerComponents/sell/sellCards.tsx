import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';


export const SellCards = () =>  {

  return (
    <Card sx={{display: 'flex', boxShadow: 3, borderRadius: 2, m:1, height: '20vh'}}  >
			<CardMedia 
					sx={{ width: "30%" }}
					component="img"
					image="https://source.unsplash.com/random"
					alt="produxts"
					/>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button>
          出品を取り消す
        </Button>
				<Typography gutterBottom variant="subtitle2" component="div">
						Title
				</Typography>
				<Typography gutterBottom variant="subtitle2" component="div">
						予約人数　販売人数　未売人数
				</Typography>
				<Typography gutterBottom variant="subtitle2" component="div">
						price
				</Typography>
				<Typography gutterBottom variant="subtitle2" component="div">
						delivery price
				</Typography>
				<Typography gutterBottom variant="subtitle2" component="div">
						place
				</Typography>
			</Box>
    </Card>
  );
}
