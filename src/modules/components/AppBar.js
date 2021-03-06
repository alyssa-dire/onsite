import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';

const AppBarRoot = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: 'rgba(250, 250, 250, 0.85)',
  backdropFilter: 'blur(5px)',
}));

function AppBar(props) {
  return <AppBarRoot elevation={0} position="fixed" {...props} />
}

export default AppBar;
