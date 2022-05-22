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
    position: 'absolute',//Headerをmainより手前に表示させる
    top: 0,
    width:'100%',
    height:'5%',
    zIndex: 2 //Headerをmainより手前に表示させる
});

//main
export const StyledMain = styled(Container)({
    height: '95%',
    width:'100%',
    backgroundColor:'lightblue',
    paddingTop: '80px',
    paddingBottom: '40px',
    overflow: 'scroll',
    zIndex: 1
});

//buy footer stay at the bottom
export const StyledBuyBottomNavigation = styled(BottomNavigation)({
    position: 'absolute',
    bottom: 0,
    width:'100%',
    backgroundColor:'lightgreen'
})

//sell footer stay at the bottom
export const StyledSellBottomNavigation = styled(BottomNavigation)({
    position: 'absolute',
    bottom: 0,
    width:'100%',
    backgroundColor:'lightgreen'
})