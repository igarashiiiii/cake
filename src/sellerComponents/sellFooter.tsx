import React from 'react';
import {Link} from "react-router-dom"

//import MUI from here
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
//import MUI to here

//import MUI icon from here
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import SettingsAccessibilityOutlinedIcon from '@mui/icons-material/SettingsAccessibilityOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
//import MUI icon to here

//import globalCss from here 
import { StyledSellBottomNavigation } from '../globalCss';
//import globalCss to here 

export const SellFooter = ( ) => {
    return(
        <div>
            <StyledSellBottomNavigation>
                <BottomNavigationAction label="add" icon={<AddCircleOutlineOutlinedIcon />} component={Link} to="/add"/>
                <BottomNavigationAction label="Sell" icon={<InventoryOutlinedIcon />} component={Link} to="/sell"/>
                <BottomNavigationAction label="detail" icon={<SettingsAccessibilityOutlinedIcon />} component={Link} to="/detail"/>
                <BottomNavigationAction label="sold" icon={<LocalMallOutlinedIcon />} component={Link} to="/sold"/>
            </StyledSellBottomNavigation>
        </div>
    )
}