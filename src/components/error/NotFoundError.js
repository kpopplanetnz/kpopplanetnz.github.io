import React, { Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';

function NotFoundError() {
    return (
        <Fragment>
            <Typography variant="h3" component="h1" style={{textAlign: "center"}}>Error - Page Not Found</Typography>
            <Grid container justify="center">
                <img src="/images/moonie.png" alt="Moonie"></img>
            </Grid>
        </Fragment>
    )
}

export default NotFoundError;