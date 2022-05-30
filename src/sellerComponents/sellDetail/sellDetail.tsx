import React, { useContext } from 'react';

//components import from here
import { SellFooter } from "../sellFooter"
import { Header } from "../../header/header"
//components import to here

//globalCss import from here
import { StyledMain } from "../../globalCss"
import { StyledBody } from "../../globalCss"
//globalCss import to here

import { ProductInformations } from '../../globalState/globalProductInfo';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

export const SellDetail = ( ) => {
//global Product State の情報 from here
	let {productInfo} = useContext(ProductInformations)
	//userIdを静的に固定
	
	let userId:number = 7
	return(
		<div>
			<StyledBody sx={{display: 'block'}}>
				<Header/>
				<StyledMain>
					selldetailコンポーネント<br />
					商品ごとの販売先を表示
{/* productStatus === 'order'かつSellerId=== 7となる商品情報を入れる関数 */}
					{productInfo.filter((productInfo:any) => {
						return productInfo.SellerId === userId && productInfo.productStatus === 'order'
					}).map((filteredBuyerInfo:any) => {
						return(
							<Card sx={{display: 'flex', boxShadow: 3, borderRadius: 2, m:1, height: '15vh'}} key={filteredBuyerInfo.BuyerId}  >
								<CardContent>
									<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									引き渡し時間{filteredBuyerInfo.productTradeDate}
									</Typography>
									<Typography variant="h5" component="div">
										電話番号{filteredBuyerInfo.BuyerId}
									</Typography>
									<Typography color="text.secondary">
										名前{filteredBuyerInfo.productTitle}
									</Typography>
								</CardContent>
								<CardActions>
									<Button size="small">販売完了</Button>
									<Button size="small">キャンセル</Button>
								</CardActions>
							</Card>
						)
					})}					
				</StyledMain>            
				<SellFooter/>
			</StyledBody>
		</div>
	)
}