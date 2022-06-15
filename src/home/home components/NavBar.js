import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import  { Icon } from '@material-ui/core';
import RangerGuy from './logo.png';
import "./NavBar.css";

function NavBar() {
    return(
    <div className='topnav'>        
        <Link className="chatRoomLink"to={`/`}>
            <Icon className="icon">
                <img src={RangerGuy} alt="icon" height={65} width={150} />
            </Icon>
        </Link>
    </div>
    );
}

export default NavBar;