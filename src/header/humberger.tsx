import React from 'react';
import { Link } from "react-router-dom";

// import MUI from here
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import MUI to here

export const Humberger = ( ) => {
    return(
        <div>
            <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    
                    </Typography>
                    <Button color="inherit">
                        <Link to ="/sell">販売者</Link>
                    </Button>
                    <Button>
                        <Link to ="/">購入者</Link>
                    </Button>
                </Toolbar>
        </div>
    )
}