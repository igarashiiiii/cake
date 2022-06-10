import React, { useContext } from 'react';

//components import from here
import { SellFooter } from "../sellFooter"
import { Header } from "../../header/header"
//components import to here

//globalCss import from here
import { StyledMain } from "../../globalCss"
import { StyledBody } from "../../globalCss"
//globalCss import to here

// import global state from here
import { ProductInformations } from '../../globalState/globalProductInfo';
import { Box, Button, Card, CardMedia, Typography } from '@mui/material';
// import global state to here

export const Sell = ( ) => {
	let {productInfo} = useContext(ProductInformations)
	//userIdを静的に固定
	let userId:number = 10
	//productStatus === 'sell'かつSellerId === 7となる商品情報を入れる箱
	let sellerItemArray:any = []

	//productStatus === 'sell'かつSellerId === 7となる商品情報を入れる関数
	const makeArry = (itemSellerFilter: any) => {
		if(itemSellerFilter.SellerId === 10 ){
			sellerItemArray.push(itemSellerFilter)
			console.log(sellerItemArray)
		}
	}
    return(
        <div>
            <StyledBody>
                <Header/>
                <StyledMain>
                    sellコンポーネント<br />
                    自分の売り出している商品を表示
										userIdを静的に固定:{userId}
{/* 
userIdとproductStatusで表示する広告にフィルターをかける
1:productStatusがsell、2:sellerがuserIdのもの
mapを2重でかける 
*/}
						{productInfo.map((itemSellerFilter:any) => {
							return(
								itemSellerFilter.productStatus === 'sell' && 
								makeArry(itemSellerFilter)
								)
							})
						}
 {/* productStatus === 'sell'かつSellerId === 7となる商品情報が入った箱から 
 表示したい情報をmap関数で取り出す
 */}
						{sellerItemArray.map((SellerItem:any) => {
							return(
								<Card sx={{display: 'flex', boxShadow: 3, borderRadius: 2, m:1, height: '20vh'}}  key={SellerItem.productId}>
								<CardMedia 
										sx={{ width: "30%" }}
										component="img"
										image="https://source.unsplash.com/random"
										alt="produxts"
										/>
								<Box sx={{ display: 'flex', flexDirection: 'column' }}>
									<Typography gutterBottom variant="subtitle2" component="div">
										{SellerItem.productTitle}
									</Typography>
									<Typography gutterBottom variant="subtitle2" component="div">
											予約人数　引渡し完了人数　引渡し未了人数　それぞれコンポーネント作る
									</Typography>
									<Typography gutterBottom variant="subtitle2" component="div">
									 {SellerItem.productPrice}円
									</Typography>
									<Button variant="outlined">
										出品を取り消す
									</Button>
								</Box>
							</Card>

								// <Card sx={{display: 'flex', boxShadow: 3, borderRadius: 2, m:1, height: '20vh'}} key={SellerItem.productId}>
								// 	<CardMedia 
								// 			sx={{ width: "30%" }}
								// 			component="img"
								// 			image={SellerItem.productPicture}
								// 			alt="produxts"
								// 			/>
								// 	<Box sx={{ display: 'flex', flexDirection: 'column' }}>
								// 		<Typography gutterBottom variant="h5" component="div">
								// 		{SellerItem.productTitle}
								// 		</Typography>
								// 		<Typography gutterBottom variant="h5" component="div">
								// 		{SellerItem.productTradeDate}
								// 		</Typography>
								// 		<Typography gutterBottom variant="h5" component="div">
								// 		{SellerItem.productPrice}円
								// 		</Typography>
								// 		<Typography gutterBottom variant="h5" component="div">
								// 		{SellerItem.productTitle}
								// 		</Typography>
								// 		<Typography gutterBottom variant="h5" component="div">
								// 		{SellerItem.productQuantity}
								// 		</Typography>
								// 	</Box>
								// </Card>
							)
						})}




                </StyledMain>            
                <SellFooter/>            
            </StyledBody>
        </div>
    )
}