import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Button, CardActions, CardContent} from '@mui/material';


export const SellDetailsCards = () =>  {

  return (
    <Card sx={{display: 'flex', boxShadow: 3, borderRadius: 2, m:1, height: '15vh'}}  >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          引き渡し時間
        </Typography>
        <Typography variant="h5" component="div">
          電話番号
        </Typography>
        <Typography color="text.secondary">
          名前
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">販売完了</Button>
      </CardActions>
  </Card>
  );
}
