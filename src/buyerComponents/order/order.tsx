import React from 'react';

//components import from here
import { BuyFooter } from "../buyFooter"
import { Header } from "../../header/header"
import { OrderCards } from "./orderCards"
//components import to here

//globalCss import from here
import { StyledMain } from "../../globalCss"
import { StyledBody } from "../../globalCss"
//globalCss import to here

//import MUI from here
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
//import MUI to here

// import global state from here
import { useContext } from 'react';
import { ProductInformations } from '../../globalState/globalProductInfo';
// import global state to here

export const Order = ( ) => {
	let {productInfo} = useContext(ProductInformations)
	let userId:number = 7
	let resItemOrderFilter:any = []

	const makeArry = (eachItemOrderFilter: any) => {
		count += 1
		resItemOrderFilter.add(eachItemOrderFilter);
		console.log(`resItemOrderFilterの中身：${count}${resItemOrderFilter}`)
		console.log(`eachItemOrderFilterの中身：${eachItemOrderFilter}`)
		return (
			resItemOrderFilter
		)
	}
	let count:number = 0
	return(
		<div>
			<StyledBody>
				<Header/>
					<StyledMain>
						予約中の商品<br />
						orderしたが、まだ商品を引き取っていない
						productStatusがorderのもののみ表示<br />
						本来であればBuyerIdがuserIdのもののみ表示するが、まだ反映していない<br />
						userIdを静的に固定:{userId}

{/* 
userIdとproductStatusで表示する広告にフィルターをかける
1:productStatusがorder、2:buerIdがuserIdのもの
mapを2重でかける 
*/}
						{productInfo.map((itemOrderFilter:any) => {
							return(
								itemOrderFilter.productStatus === 'order' && 

								console.log(itemOrderFilter)
								)
							})
						}
						{resItemOrderFilter.map((BuyerOrderFilter:any) => {
							return(
								BuyerOrderFilter.BuyerId === {userId} && 

								<p>{BuyerOrderFilter.productTitle}</p>
								)
							})}
	

								 {/*
								// 	<Card sx={{display: 'flex', boxShadow: 3, borderRadius: 2, m:1, height: '20vh'}} key={itemBuyerFilter.productId}>
								// 			<CardMedia 
								// 					sx={{ width: "30%" }}
								// 					component="img"
								// 					image={itemOrderFilter.productPicture}
								// 					alt="produxts"
								// 					/>
								// 			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
								// 				<Typography gutterBottom variant="h5" component="div">
								// 				{itemOrderFilter.productTitle}
								// 				</Typography>
								// 				<Typography gutterBottom variant="h5" component="div">
								// 				{itemOrderFilter.productTradeDate}
								// 				</Typography>
								// 				<Typography gutterBottom variant="h5" component="div">
								// 				{itemOrderFilter.productPrice}円
								// 				</Typography>
								// 				<Typography gutterBottom variant="h5" component="div">
								// 				{itemOrderFilter.productTitle}
								// 				</Typography>
								// 				<Typography gutterBottom variant="h5" component="div">
								// 				{itemOrderFilter.productQuantity}
								// 				</Typography>
								// 			</Box>
								// 		</Card>
								
								*/}
					</StyledMain>
				<BuyFooter/>
			</StyledBody>
		</div>
	)
}