import React from 'react';

//components import from here
import { SellFooter } from "../sellFooter"
import { Header } from "../../header/header"
import { SoldCards } from "./soldCards"
//components import to here

//globalCss import from here
import { StyledMain } from "../../globalCss"
import { StyledBody } from "../../globalCss"
//globalCss import to here


export const Sold = ( ) => {
    return(
        <div>
            <StyledBody>
                <Header/>
                <StyledMain>
                    Soldコンポーネント
                    <SoldCards/>
                    <SoldCards/>
                    <SoldCards/>
                    <SoldCards/>
                    <SoldCards/>
                    <SoldCards/>
                    <SoldCards/>
                    <SoldCards/>
                    <SoldCards/>
                    <SoldCards/>
                    <SoldCards/>
                    <SoldCards/>
                </StyledMain>            
                <SellFooter/>            
            </StyledBody>
        </div>
    )
}