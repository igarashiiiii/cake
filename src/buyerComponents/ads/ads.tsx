import React from 'react';

//components import from here
import { BuyFooter } from "../buyFooter"
import { Header } from "../../header/header"
//components import to here

//globalCss import from here
import { StyledMain } from "../../globalCss"
import { StyledBody } from "../../globalCss"
import { Grid } from '@mui/material';
//globalCss import to here

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

export const Ads = ( ) => {
	// global stateのproductInfoの情報を取得
	let {productInfo} = useContext(ProductInformations)
    return(
        <div>
            <StyledBody>
                <Header />
                <StyledMain>
									商品一覧画面<br />
									出品中の商品を表示<br />
									productStatusがsellのもののみ表示<br />
									<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm:9, md: 12 }}>
									{productInfo.map((item:any) => {
										return(
											//productStatusで表示する広告にフィルターをかける。sellのみ表示
											item.productStatus === 'sell' &&
											<Grid item xs={2} sm={3} md={3} key={item.productId}>
												<Card sx={{ maxWidth: 350, boxShadow: 3}}>
													<CardActionArea>
														<CardMedia
															component="img"
															height="200"
															image={item.productPicture}
															alt="produxts"
														/>
														<CardContent>
															<Typography gutterBottom variant="h5" component="div">
																{item.productTitle}
															</Typography>
															<Typography gutterBottom variant="subtitle1" component="div">
															{item.productPrice}円
															</Typography>
														</CardContent>
													</CardActionArea>
												</Card>
											</Grid>
										)
									})}
									</Grid>	
                </StyledMain>            
                <BuyFooter/>            
            </StyledBody>
        </div>
    )
}