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
	//userIdを静的に固定
	let userId:number = 7
	//productStatus === 'order'かつBuyerId === 7となる商品情報を入れる箱
	let buyerItemOrderFilter:any = []

	//productStatus === 'order'かつBuyerId === 7となる商品情報を入れる関数
	const makeArry = (itemOrderFilter: any) => {
		if(itemOrderFilter.BuyerId === 7 ){
			buyerItemOrderFilter.push(itemOrderFilter)
			console.log(buyerItemOrderFilter)
		}
	}
	
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
								makeArry(itemOrderFilter)
								)
							})
						}
 {/* productStatus === 'order'かつBuyerId === 7となる商品情報が入った箱から 
 表示したい情報をmap関数で取り出す
 */}
						{buyerItemOrderFilter.map((buyerItem:any) => {
							return(
								<Card sx={{display: 'flex', boxShadow: 3, borderRadius: 2, m:1, height: '20vh'}} key={buyerItem.productId}>
									<CardMedia 
											sx={{ width: "30%" }}
											component="img"
											image={buyerItem.productPicture}
											alt="produxts"
											/>
									<Box sx={{ display: 'flex', flexDirection: 'column' }}>
										<Typography gutterBottom variant="h5" component="div">
										{buyerItem.productTitle}
										</Typography>
										<Typography gutterBottom variant="h5" component="div">
										{buyerItem.productTradeDate}
										</Typography>
										<Typography gutterBottom variant="h5" component="div">
										{buyerItem.productPrice}円
										</Typography>
										<Typography gutterBottom variant="h5" component="div">
										{buyerItem.productTitle}
										</Typography>
										<Typography gutterBottom variant="h5" component="div">
										{buyerItem.productQuantity}
										</Typography>
									</Box>
								</Card>
							)
						})}
					</StyledMain>
				<BuyFooter/>
			</StyledBody>
		</div>
	)
}