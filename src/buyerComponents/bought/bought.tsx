// import global state from here
import { useContext } from 'react';
import { ProductInformations } from '../../globalState/globalProductInfo';
// import global state to here

//components import from here
import { BuyFooter } from "../buyFooter"
import { Header } from "../../header/header"
//components import to here

//globalCss import from here
import { StyledMain } from "../../globalCss"
import { StyledBody } from "../../globalCss"
//globalCss import to here

//import MUI from here
import { Box, Card, CardMedia, Typography } from '@mui/material';
//import MUI to here

//orderコンポーネントと構成は同じ、違うのは抽出条件がproductStatus === 'sold'であることのみ
export const Bought = ( ) => {
	let {productInfo} = useContext(ProductInformations)
	//userIdを静的に固定
	let userId:number = 8
	//productStatus === 'sold'かつBuyerId === 8となる商品情報を入れる箱
	let buyerItemOrderFilter:any = []

	//productStatus === 'sold'かつBuyerId === 8となる商品情報を入れる関数
	const makeArry = (itemOrderFilter: any) => {
		if(itemOrderFilter.BuyerId === 8 ){
			buyerItemOrderFilter.push(itemOrderFilter)
			console.log(buyerItemOrderFilter)
		}
	}
	
	return(
		<div>
			<StyledBody>
				<Header/>
					<StyledMain>
						引き渡し済の商品<br />
						productStatusがsoldのもののみ表示<br />
						本来であればBuyerIdがuserIdのもののみ表示するが、まだ反映していない<br />
						userIdを静的に固定:{userId}

{/* 
userIdとproductStatusで表示する広告にフィルターをかける
1:productStatusがsold、2:buerIdがuserIdのもの
mapを2重でかける 
*/}
						{productInfo.map((itemOrderFilter:any) => {
							return(
								itemOrderFilter.productStatus === 'sold' && 
								makeArry(itemOrderFilter)
								)
							})
						}
 {/* productStatus === 'sold'かつBuyerId === 8となる商品情報が入った箱から 
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