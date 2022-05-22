import React from 'react';

//components import from here
import { BuyFooter } from "./buyFooter"
import { Header } from "../header/header"
//components import to here

//globalCss import from here
import { StyledMain } from "../globalCss"
import { StyledBody } from "../globalCss"
//globalCss import to here

export const Bought = ( ) => {
    return(
        <div>
            <StyledBody>
                <Header/>
                <StyledMain>
                Boughtコンポーネント
                購入履歴
                </StyledMain>
                <BuyFooter/>
            </StyledBody>
        </div>
    )
}