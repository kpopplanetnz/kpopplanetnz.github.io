import React from 'react';
import {Card, CardContent, CardMedia, Grid, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles' 
import PropTypes from 'prop-types';

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
            loading: true,
            sponsors: []
        };
    }

    componentDidMount() {
        // fetch("https://kpopplanet-dev.azurewebsites.net/Sponsors/Get")
        fetch("http://localhost:3001/api/sponsors")
        .then(results => {
            return results.json();
        }).then(data => {
            this.setState({sponsors: data});
            // console.log("state", this.state.sponsors);
        })
        this.setState({loading: false});
    }

    render() {
        const { classes } = this.props;
        // console.log(this.state.sponsors);
        return(
            <Grid container spacing={24} justify="center">
                <Grid item xs={12}>
					<Typography variant="h5" align="center" component="h1">
						Sponsors
					</Typography>
				</Grid>
                {
                    this.state.loading 
                    ? <Typography gutterBottom variant="caption" component="p">Loading in progress</Typography> 
                    : this.state.sponsors === undefined || this.state.sponsors.length == 0
                        ? <Typography gutterBottom variant="body1" component="p">Unable to load sponsors</Typography>
                        : this.state.sponsors.map((sponsor) => {
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
                }
            </Grid>
        );
    }
}

Sponsors.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sponsors);