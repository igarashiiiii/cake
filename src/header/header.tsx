import React from 'react';

import {Humberger} from "./humberger"

// import MUI from here
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import MUI to here

export const Header = ( ) => {
    return(
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Humberger/>
                </AppBar>
            </Box>
        </div>
    )
}