import React from 'react';
import { styled } from "@mui/material/styles";
import BottomNavigation from '@mui/material/BottomNavigation';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


//body
export const StyledBody = styled('div')({
    height: '100vh',
    position: 'relative',
    width:'100%',
});

//Header stay at the top
export const StyledTopBox = styled(Box)({
    position: 'absolute',
    top: 0,
    width:'100%',
    height:'5%'
});

//main
export const StyledContainer = styled(Container)({
    height: '90%',
    width:'100%',
    backgroundColor:'lightblue',
    paddingBottom: '5%',
    paddingTop: '5%',
    overflow: 'scroll'
});

//footer stay at the bottom
export const StyledBottomNavigation = styled(BottomNavigation)({
    position: 'absolute',
    bottom: 0,
    width:'100%',
    backgroundColor:'lightgreen'
})