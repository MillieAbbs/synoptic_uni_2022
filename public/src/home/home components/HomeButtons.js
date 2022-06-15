import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './HomeButtons.css';
import MessageIcon from '@material-ui/icons/Message';
import BotIcon from '@material-ui/icons/Adb';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { deepPurple, pink } from '@mui/material/colors';
import { ButtonGroup } from '@material-ui/core';


const theme = createTheme({
    palette: {
        primary:{
            main: pink[400],
        },
        secondary:{
            main: deepPurple[500],
        }
    }
})

function HomeButtons(){

    // give each user a unique room id
    const roomName = Math.ceil(Math.random() * 999999);

    return(
    <ThemeProvider theme={theme}>
    <div id='outer'>
        <ButtonGroup color='primary'>
            <Button
            className='button'
            startIcon={<BotIcon />}
            size="large"
            component={Link}
            to={`/chatbot`}
            variant="contained">
            Need Info
            
        </Button>
        <Button 
            className='button'
            startIcon={<MessageIcon />}
            size= "large"
            component={Link}
            to={`/chat/${roomName}`}
            variant ="contained">
            Live Chat
        </Button>
        </ButtonGroup>
    </div>
    </ThemeProvider>

    );
}

export default HomeButtons;