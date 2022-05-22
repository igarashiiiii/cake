import React from 'react';
import { styled } from "@mui/material/styles";
import BottomNavigation from '@mui/material/BottomNavigation';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


//body
export const StyledContainer = styled(Container)({
    height: '100vh',
    position: 'relative',
    width:'100%',
    backgroundColor:'lightblue',
    paddingBottom: '70px',
    paddingTop: '70px',
    boxSizing: 'border-box',
});

//Header stay at the top
export const StyledTopBox = styled(Box)({
    position: 'absolute',
    top: 0,
    width:'100%'
});

//footer stay at the bottom
export const StyledBottomNavigation = styled(BottomNavigation)({
    position: 'absolute',
    bottom: 0,
    width:'100%',
    backgroundColor:'lightgreen'
})