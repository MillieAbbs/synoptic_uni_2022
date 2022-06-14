import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import  { Icon } from '@material-ui/core';
import RangerGuy from './rangerGuy.svg';
import "./NavBar.css";

function NavBar() {
    return(
    <div className='topnav'>        
        <Link className="chatRoomLink"to={`/`}>
            <Icon className="icon">
                <img src={RangerGuy}  alt="icon" height={65} width={80} />
            </Icon>
        </Link>
        <Link className="rangerLink" to={'/rangerportal'}>
            <Button variant='contained'>Ranger Login</Button>
        </Link>
    </div>
    );
}

export default NavBar;