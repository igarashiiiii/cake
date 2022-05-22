import React from 'react';

//components import from here
import { BuyFooter } from "./buyFooter"
import { Header } from "../header/header"
//components import to here

//globalCss import from here
import { StyledContainer } from "../globalCss"
//globalCss import to here

export const Order = ( ) => {
    return(
        <div>
            <StyledContainer>
                <Header/>
                Orderコンポーネント
                オーダー商品画面
                <BuyFooter/>
            </StyledContainer>
        </div>
    )
}