import React from 'react';
import {Link} from "react-router-dom"

//import MUI from here
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
//import MUI to here

//import MUI icon from here
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
//import MUI icon to here

//import globalCss from here 
import { StyledBuyBottomNavigation } from '../globalCss';
//import globalCss to here 

export const BuyFooter = ( ) => {
    return(
        <div>
            <StyledBuyBottomNavigation>
                <BottomNavigationAction label="Order" icon={<ShoppingCartOutlinedIcon />} component={Link} to="/order"/>
                <BottomNavigationAction label="Search" icon={<SearchOutlinedIcon />} component={Link} to="/"/>
                <BottomNavigationAction label="Bought" icon={<DoneOutlineOutlinedIcon />} component={Link} to="/bought"/>
            </StyledBuyBottomNavigation>
        </div>
    )
}