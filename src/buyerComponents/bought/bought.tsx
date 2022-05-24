import React from 'react';

//components import from here
import { BuyFooter } from "../buyFooter"
import { Header } from "../../header/header"
import { BoughtCards } from "./boughtCards"
//components import to here

//globalCss import from here
import { StyledMain } from "../../globalCss"
import { StyledBody } from "../../globalCss"
//globalCss import to here

export const Bought = ( ) => {
	return(
		<div>
			<StyledBody>
				<Header/>
				<StyledMain>
					boughtコンポーネント<br />
					引き取り済みの商品を表示
					<BoughtCards/>
					<BoughtCards/>
					<BoughtCards/>
					<BoughtCards/>
					<BoughtCards/>
					<BoughtCards/>
				</StyledMain>
				<BuyFooter/>
			</StyledBody>
		</div>
	)
}