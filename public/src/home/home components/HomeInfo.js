import React from 'react';
import './HomeInfo.css';

import '@fontsource/roboto';
import Typography from '@material-ui/core/Typography';

function HomeInfo(){
    return(
        <div className='outer'>
            <Typography className="info">
                Welcome to the 'Cape York Help Desk'. This app provides help to tourists
                and residents of Cape York alike. Press the 'Need Info' button
                for general information, amenities or just things to do. If you need
                access to a ranger, press the 'Live Chat' button to be put in a room
                where you'll be able to ask them any questions or alert them of any 
                issues.
            </Typography>
        </div>
    )
}

export default HomeInfo;