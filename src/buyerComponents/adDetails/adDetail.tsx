import React from 'react';

//components import from here
import { BuyFooter } from "../buyFooter"
import { Header } from "../../header/header"
import { AdDetailsCards } from "./adDetailsCards"
//components import to here

//globalCss import from here
import { StyledContainer } from "../../globalCss"
//globalCss import to here

export const AdDetail = ( ) => {
    return(
        <div>
            <StyledContainer>
                <Header/>
                AdDetailコンポーネント
                商品詳細画面
                <AdDetailsCards/>
                <BuyFooter/>
            </StyledContainer>            
        </div>
    )
}