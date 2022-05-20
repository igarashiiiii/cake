import React from 'react';
import { Routes, Route } from 'react-router-dom'
import {Login} from '../login'
import {Ads} from '../ads'
import {Info} from '../info'
import {Sell} from '../sell'
import {SellAdd} from '../sellAdd'
import {SellDetail} from '../sellDetail'
import {Sold} from '../sold'
import {AdDetail} from '../adDetail'
import {Perchase} from '../perchase'
import {Order} from '../order'
import {Bought} from '../bought'

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