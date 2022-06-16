import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import  { Icon } from '@material-ui/core';
import RangerGuy from './logo.png';
import "./NavBar.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary:{
            main: pink[400],
        },
    }
})

function NavBar() {
    return(
    <ThemeProvider theme={theme}>
    <div className='topnav'>        
        <Link className="chatRoomLink"to={`/`}>
            <Icon className="icon">
                <img src={RangerGuy} alt="icon" height={65} width={150} />
            </Icon>
        </Link>
        <Link className="rangerLink" to={'/rangerportal'}>
            <Button variant='contained' color="primary">Ranger Login</Button>
        </Link>
    </div>
    </ThemeProvider>
    
    );
}

export default NavBar;