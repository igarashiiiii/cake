import React from 'react';

//components import from here
import { BuyFooter } from "../buyFooter"
import { Header } from "../../header/header"
import { AdDetailsCards } from "./adDetailsCards"
//components import to here

//globalCss import from here
import { StyledMain } from "../../globalCss"
import { StyledBody } from "../../globalCss"
//globalCss import to here

export const AdDetail = ( ) => {
    return(
        <div>
            <StyledBody sx={{display: 'block'}}>
                <Header/>
                <StyledMain>
                    <AdDetailsCards/>
                </StyledMain>            
                <BuyFooter/>            
            </StyledBody>
        </div>
    )
}