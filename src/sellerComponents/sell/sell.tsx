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