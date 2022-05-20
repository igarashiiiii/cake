import React from 'react';
import { Routes, Route } from 'react-router-dom'


import {Login} from '../login'
import {Info} from '../info'

//buyerComponnents from here
import {Ads} from '../buyerComponents/ads'
import {AdDetail} from '../buyerComponents/adDetail'
import {Perchase} from '../buyerComponents/perchase'
import {Order} from '../buyerComponents/order'
import {Bought} from '../buyerComponents/bought'
//buyerComponnents to here

//sellerComponnents from here
import {Sell} from '../sellerComponents/sell'
import {SellAdd} from '../sellerComponents/sellAdd'
import {SellDetail} from '../sellerComponents/sellDetail'
import {Sold} from '../sellerComponents/sold'
//sellerComponnents to here
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
                <Route path="perchase" element={<Perchase/>}></Route>
                <Route path="order" element={<Order/>}></Route>
                <Route path="bought" element={<Bought/>}></Route>
            </Routes>
        </>
    )
}