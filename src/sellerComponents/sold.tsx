import React from 'react';

//components import from here
import { SellFooter } from "./sellFooter"
import { Header } from "../header/header"
//components import to here

export const Sold = ( ) => {
    return(
        <div>
            <Header/>
            Soldコンポーネント
            <SellFooter/>
        </div>
    )
}