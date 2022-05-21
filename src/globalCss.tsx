import React from 'react';
import { styled } from "@mui/material/styles";
import BottomNavigation from '@mui/material/BottomNavigation';
import Container from '@mui/material/Container';

export const StyledContainer = styled(Container)({
    height: '100vh',
    position: 'relative',
    maxWidth: 'sm',
});

export const styledBottomNavigation = styled(BottomNavigation)({
    position: 'absolute',
    bottom: 0,
})