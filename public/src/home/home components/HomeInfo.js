import React from 'react';
import './HomeInfo.css';

import '@fontsource/roboto';
import Typography from '@material-ui/core/Typography';

function HomeInfo(){
    return(
        <div className='outer'>
            <Typography className="info" variant='body1'>
                The 'Cape York Help Desk' is for residents and tourists of Cape York
                to contact our rangers for assistance. Our bot chat provides
                answers to frequent queries, and our live chat allows quick
                access to a ranger to provide their insight and knowledge to
                you, and for you to alert them of any issues.
            </Typography>
        </div>
    )
}

export default HomeInfo;