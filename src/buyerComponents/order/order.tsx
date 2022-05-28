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

						{productInfo.map((item:any) => {
							return(
								//userIdとproductStatusで表示する広告にフィルターをかける
								//buerIdがuserIdのもの、productStatusがorderのみ表示
								item.productStatus === 'order' && item.BuyerId === {userId} &&
								<Card sx={{display: 'flex', boxShadow: 3, borderRadius: 2, m:1, height: '20vh'}}>
									<CardMedia 
											sx={{ width: "30%" }}
											component="img"
											image={productInfo[userId].productPicture}
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
							)})}
					</StyledMain>
				<BuyFooter/>
			</StyledBody>
		</div>
	)
}