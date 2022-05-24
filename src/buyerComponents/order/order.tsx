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

export const Order = ( ) => {
	return(
		<div>
			<StyledBody>
				<Header/>
				<StyledMain>
					予約中の商品<br />
					orderしたが、まだ商品を引き取っていない
					<OrderCards/>
					<OrderCards/>
					<OrderCards/>
					<OrderCards/>
					<OrderCards/>
				</StyledMain>
				<BuyFooter/>
			</StyledBody>
		</div>
	)
}