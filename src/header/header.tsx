import React from 'react';

import {Humberger} from "./humberger"

// import MUI from here
import AppBar from '@mui/material/AppBar';
// import MUI to here

//import globalCss from here 
import { StyledTopBox } from '../globalCss';
//import globalCss to here 

export const Header = ( ) => {
    return(
        <div>
            <StyledTopBox sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Humberger/>
                </AppBar>
            </StyledTopBox>
        </div>
    )
}