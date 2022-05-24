import React from 'react';

//components import from here
import { SellFooter } from "../sellFooter"
import { Header } from "../../header/header"
import { SellCards } from "./sellCards"
//components import to here

//globalCss import from here
import { StyledMain } from "../../globalCss"
import { StyledBody } from "../../globalCss"
//globalCss import to here

export const Sell = ( ) => {
    return(
        <div>
            <StyledBody>
                <Header/>
                <StyledMain>
                    sellコンポーネント<br />
                    自分の売り出している商品を表示
                    <SellCards/>
                    <SellCards/>
                    <SellCards/>
                    <SellCards/>
                    <SellCards/>
                    <SellCards/>
                </StyledMain>            
                <SellFooter/>            
            </StyledBody>
        </div>
    )
}