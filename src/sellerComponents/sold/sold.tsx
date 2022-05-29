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
import { Box, Card, CardMedia, Typography } from '@mui/material';
// import global state to here

export const Sold = ( ) => {
    let {productInfo} = useContext(ProductInformations)
	//userIdを静的に固定
	let userId:number = 8
	//productStatus === 'sold'かつSellerId === 8となる商品情報を入れる箱
	let sellerItemOrderFilter:any = []

	//productStatus === 'sold'かつBuyerId === 8となる商品情報を入れる関数
	const makeArry = (itemSoldFilter: any) => {
		if(itemSoldFilter.SellerId === 8 ){
			sellerItemOrderFilter.push(itemSoldFilter)
			console.log(sellerItemOrderFilter)
		}
	}

    return(
        <div>
            <StyledBody>
                <Header/>
                <StyledMain>
                userIdを静的に固定:{userId}

{/* 
userIdとproductStatusで表示する広告にフィルターをかける
1:productStatusがsold、2:SellerIdがuserIdのもの
mapを2重でかける 
*/}
						{productInfo.map((itemSoldFilter:any) => {
							return(
								itemSoldFilter.productStatus === 'sold' && 
								makeArry(itemSoldFilter)
								)
							})
						}
 {/* productStatus === 'sold'かつSellerId === 8となる商品情報が入った箱から 
 表示したい情報をmap関数で取り出す
 */}
						{sellerItemOrderFilter.map((sellerItem:any) => {
							return(
								<Card sx={{display: 'flex', boxShadow: 3, borderRadius: 2, m:1, height: '20vh'}} key={sellerItem.productId}>
									<CardMedia 
											sx={{ width: "30%" }}
											component="img"
											image={sellerItem.productPicture}
											alt="produxts"
											/>
									<Box sx={{ display: 'flex', flexDirection: 'column' }}>
										<Typography gutterBottom variant="h5" component="div">
										{sellerItem.productTitle}
										</Typography>
										<Typography gutterBottom variant="h5" component="div">
										{sellerItem.productTradeDate}
										</Typography>
										<Typography gutterBottom variant="h5" component="div">
										{sellerItem.productPrice}円
										</Typography>
										<Typography gutterBottom variant="h5" component="div">
										{sellerItem.productTitle}
										</Typography>
										<Typography gutterBottom variant="h5" component="div">
										{sellerItem.productQuantity}
										</Typography>
									</Box>
								</Card>
							)
						})}
                </StyledMain>            
                <SellFooter/>            
            </StyledBody>
        </div>
    )
}