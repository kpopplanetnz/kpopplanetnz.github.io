import React, { Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';

function LoadError(props) {
    return (
        <Fragment>
            {
                props.message ? 
                <Typography gutterBottom variant="body1" component="p">{props.message}</Typography> :
                <Typography gutterBottom variant="body1" component="p">Unable to load part/whole page</Typography>
            }
            <Grid container justify="center">
                <img src="./images/moonie.png" alt="Moonie Image"></img>
            </Grid>
        </Fragment>
    );
}

export default LoadError;