import React from 'react';

//components import from here
import { SellFooter } from "./sellFooter"
import { Header } from "../header/header"
//components import to here

//globalCss import from here
import { StyledContainer } from "../globalCss"
//globalCss import to here

export const SellDetail = ( ) => {
    return(
        <div>
            <StyledContainer>
                <Header/>
                    SellDetailコンポーネント
                <SellFooter/>
            </StyledContainer>
        </div>
    )
}