import React from 'react';

//components import from here
import { SellFooter } from "./sellFooter"
import { Header } from "../header/header"
//components import to here

//globalCss import from here
import { StyledMain } from "../globalCss"
import { StyledBody } from "../globalCss"
//globalCss import to here

export const Sell = ( ) => {
    return(
        <div>
            <StyledBody>
                <Header/>
                <StyledMain>
                    Sellコンポーネント
                </StyledMain>            
                <SellFooter/>            
            </StyledBody>
        </div>
    )
}