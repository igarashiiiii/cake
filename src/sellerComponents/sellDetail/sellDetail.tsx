import React from 'react';

//components import from here
import { SellFooter } from "../sellFooter"
import { Header } from "../../header/header"
import { SellDetailsCards } from "./sellDetailCards"
//components import to here

//globalCss import from here
import { StyledMain } from "../../globalCss"
import { StyledBody } from "../../globalCss"
//globalCss import to here

export const SellDetail = ( ) => {
    return(
        <div>
            <StyledBody sx={{display: 'block'}}>
                <Header/>
                <StyledMain>
                    <SellDetailsCards/>
                    <SellDetailsCards/>
                    <SellDetailsCards/>
                    <SellDetailsCards/>
                    <SellDetailsCards/>
                    <SellDetailsCards/>
                    <SellDetailsCards/>
                    <SellDetailsCards/>
                    <SellDetailsCards/>
                    <SellDetailsCards/>
                </StyledMain>            
                <SellFooter/>            
            </StyledBody>

        </div>
    )
}