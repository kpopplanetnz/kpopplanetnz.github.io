import React, { Fragment } from 'react';
import {Card, CardContent, CardMedia, Grid, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles' 
import PropTypes from 'prop-types';
import LoadError from './error/LoadError';

const styles = theme => ({
    logo: {
        height: '250px',
        width: 'auto',
        maxWidth: 'none',
        minWidth: 'none',
    },
    // Make sure all cards have same height
    card: {
        height: '100%'
    },
    media: {
        // height: 250,
        // width: "auto",
        // marginLeft: "auto",
        // marginRight: "auto"
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    // https://spin.atomicobject.com/2015/07/14/css-responsive-square/
    square: {
        position: 'relative',
        // maxWidth: '250px',
        '&:after': {
            content: '""',
            display: 'block',
            paddingBottom: '100%',
        }
    },
});

class Sponsors extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            sponsors: [],
            error: null
        };
    }

    componentDidMount() {
        // fetch("https://kpopplanet-dev.azurewebsites.net/Sponsors/Get")
        fetch("http://localhost:3001/api/sponsors")
        .then(results => results.json())
        .then(data => {
            this.setState({
                sponsors: data,
                isLoading: false
            });
            // console.log("state", this.state.sponsors);
        })
        .catch(error => {
            console.error(error);
            this.setState({
                error,
                isLoading: false
            });
        });
    }

    render() {
        const { classes } = this.props;
        const { isLoading, sponsors, error } = this.state;
        // console.log(this.state.sponsors);
        return(
            <Fragment>
                <Grid item xs={12}>
					<Typography variant="h5" align="center" component="h1">
						Sponsors
					</Typography>
				</Grid>
                {error ? <LoadError message="Unable to load sponsors" /> : null}
                
                {!isLoading ? 
                    (
                        sponsors.map((sponsor) => {
                            sponsor.description = sponsor.description.replace("\\n", '\n');
                                return (
                                    <Grid item key={sponsor.name} xs={11} sm={6} md={4} lg={3}>
                                        <Card
                                            className={classes.card}
                                            elevation={3}
                                        >
                                            <div className={classes.square}>
                                                <CardMedia
                                                    className={classes.media}
                                                    component="img"
                                                    image={sponsor.logoUrl}
                                                    title={sponsor.name + " Logo"}
                                                />
                                            </div>
                                            <CardContent>
                                                <Typography variant="h6" component="h2">
                                                    {sponsor.name}
                                                </Typography>
                                                <Typography gutterBottom variant="caption" component="p">
                                                    {sponsor.location}
                                                </Typography>
                                                <Typography paragraph style={styles.lineBreak}>
                                                    {sponsor.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                );
                        })
                    ) : (
                        <Typography gutterBottom variant="caption" component="p">Loading in progress</Typography> 
                    )
                }
            </Fragment>
        );
    }
}

Sponsors.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sponsors);