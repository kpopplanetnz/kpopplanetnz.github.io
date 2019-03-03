import React, { Fragment } from 'react';
import { Grid, Link, Typography } from '@material-ui/core';

class ContactUs extends React.Component {
    render() {
        return(
            <Fragment>
                <Grid item xs={12}>
					<Typography gutterBottom variant="h5" align="center" component="h1">
						Contact Us
					</Typography>
                    <Typography paragraph align="center" variant="body1">
						If you have any questions or enquiries feel free to reach out to us via <Link href="mailto:kpopplanetnz@gmail.com">Email</Link>
					</Typography>
				</Grid>
            </Fragment>
        )
    }
}

export default ContactUs;