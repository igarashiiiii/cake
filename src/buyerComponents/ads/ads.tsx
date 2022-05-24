import React from 'react';

//components import from here
import { BuyFooter } from "../buyFooter"
import { Header } from "../../header/header"
import { AdsCards } from "./adsCards"
//components import to here

//globalCss import from here
import { StyledMain } from "../../globalCss"
import { StyledBody } from "../../globalCss"
import { Grid } from '@mui/material';
//globalCss import to here


export const Ads = ( ) => {
    return(
        <div>
            <StyledBody>
                <Header />
                <StyledMain>
									商品一覧画面<br />
									出品中の商品を表示
									<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm:9, md: 12 }}>
										<Grid item xs={2} sm={3} md={3}>
											<AdsCards/>
										</Grid>
										<Grid item xs={2} sm={3} md={3}>
											<AdsCards/>
										</Grid>
										<Grid item xs={2} sm={3} md={3}>
											<AdsCards/>
										</Grid>
										<Grid item xs={2} sm={3} md={3}>
											<AdsCards/>
										</Grid>
										<Grid item xs={2} sm={3} md={3}>
											<AdsCards/>
										</Grid>
										<Grid item xs={2} sm={3} md={3}>
											<AdsCards/>
										</Grid>
										<Grid item xs={2} sm={3} md={3}>
											<AdsCards/>
										</Grid>
										<Grid item xs={2} sm={3} md={3}>
											<AdsCards/>
										</Grid>
									</Grid>
                </StyledMain>            
                <BuyFooter/>            
            </StyledBody>
        </div>
    )
}