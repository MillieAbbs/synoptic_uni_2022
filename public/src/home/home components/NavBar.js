import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import  { Icon } from '@material-ui/core';
import RangerGuy from './rangerGuy.svg';
import "./NavBar.css";

function NavBar() {
    return(
    <div className='topnav'>       
        <Icon className="icon"
            component={Link}
            to={`/`}>
            <img src={RangerGuy}  alt="icon" height={65} width={80} />
        </Icon>

        <Button
            component={Link}
            to={'/rangerportal'}
            className="rangerLink"
            variant='contained'>
            Ranger Login
        </Button>
    </div>
    );
}

export default NavBar;