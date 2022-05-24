import React from 'react';

//components import from here
import { SellFooter } from "../sellFooter"
import { Header } from "../../header/header"
import { SellAddCards } from "./sellAddCards"

//components import to here

//globalCss import from here
import { StyledMain } from "../../globalCss"
import { StyledBody } from "../../globalCss"
//globalCss import to here

export const SellAdd = ( ) => {
    return(
        <div>
            <StyledBody>
                <Header/>
                <StyledMain>
                    SellAddコンポーネント
                    <SellAddCards/>
                </StyledMain>            
                <SellFooter/>            
            </StyledBody>
        </div>
    )
}