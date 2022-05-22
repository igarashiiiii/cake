import React from 'react';

//components import from here
import { BuyFooter } from "../buyFooter"
import { Header } from "../../header/header"
import { AdsProducts } from "./adsCards"
//components import to here

//globalCss import from here
import { StyledContainer } from "../../globalCss"
//globalCss import to here


export const Ads = ( ) => {
    return(
        <div>
            <StyledContainer>
                <Header/>
                    adsコンポーネント
                    商品一覧画面
                    <AdsProducts/>
                <BuyFooter/>
            </StyledContainer>            
            
        </div>
    )
}