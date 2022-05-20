import React from 'react';

//import MUI from here
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
//import MUI to here

//import MUI icon from here
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
//import MUI icon to here

export const BuyFooter = ( ) => {
    return(
        <div>
            BuyFooterコンポーネント
            <BottomNavigation>
                <BottomNavigationAction label="Order" icon={<ShoppingCartOutlinedIcon />} />
                <BottomNavigationAction label="Search" icon={<SearchOutlinedIcon />} />
                <BottomNavigationAction label="Bought" icon={<DoneOutlineOutlinedIcon />} />
            </BottomNavigation>
        </div>
    )
}