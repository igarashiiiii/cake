import React from 'react';
import { Routes, Route } from 'react-router-dom'


import {Login} from '../login'
import {Info} from '../info'

//buyerComponnents from here
import {Ads} from '../buyerComponents/ads/ads'
import {AdDetail} from '../buyerComponents/adDetails/adDetail'

import {Order} from '../buyerComponents/order/order'
import {Bought} from '../buyerComponents/bought/bought'
//buyerComponnents to here

//sellerComponnents from here
import {Sell} from '../sellerComponents/sell/sell'
import {SellAdd} from '../sellerComponents/sellAdd/sellAdd'
import {SellDetail} from '../sellerComponents/sellDetail/sellDetail'
import {Sold} from '../sellerComponents/sold/sold'
//sellerComponnents to here

import {Confirm} from '../confirm'

export const Routing = () => {
    return (
        <>
            <Routes>    
                <Route path="login" element={<Login /> }></Route>
                <Route path="/" element={<Ads/>}></Route>
                <Route path="info" element={<Info/>}></Route>
                <Route path="sell" element={<Sell/>}></Route>
                <Route path="detail" element={<SellDetail/>}></Route>
                <Route path="add" element={<SellAdd/>}></Route>
                <Route path="sold" element={<Sold/>}></Route>
                <Route path="buy" element={<AdDetail/>}></Route>
                <Route path="order" element={<Order/>}></Route>
                <Route path="bought" element={<Bought/>}></Route>

                <Route path="confirm" element={<Confirm/>}></Route>
            </Routes>
        </>
    )
}