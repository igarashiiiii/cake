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