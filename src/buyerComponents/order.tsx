import React from 'react';

//components import from here
import { BuyFooter } from "./buyFooter"
import { Header } from "../header/header"
//components import to here

export const Order = ( ) => {
    return(
        <div>
            <Header/>
            Orderコンポーネント
            <BuyFooter/>
        </div>
    )
}