import React, { Fragment } from 'react';
import {Card, CardContent, CardMedia, Grid, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import LoadError from './error/LoadError';

const styles = theme => ({
    // Make sure all cards have same height
    card: {
        height: '100%'
    },
});

const about = [
    {
        _id: 0,
        title: "Minseok",
        image: "./images/profile/min.jpg",
        position: "President",
        about: "Hi everyone. My name is Min and my role is to organise events for you guys. My bias groups are G.O.D., Mamamoo and Twice. I hope you guys enjoy our events and have an amazing year. :)"
    },
    {
        _id: 1,
        title: "Kylie",
        image: "./images/profile/kylie.png",
        position: "Vice President / Marketing",
        about: "I can wiggle my ears"
    },
    {
        _id: 2,
        title: "Jack",
        image: "./images/profile/jack.jpg",
        position: "IT",
        about: "Welcome to Kpop Planet, hope you enjoy your time here with us!! Kpop fan of many groups. Love to meet new people. Yoona bae for lyfe <3"
    },
    {
        _id: 3,
        title: "Catalina",
        image: "./images/profile/cat.jpg",
        position: "Graphics Designer",
        about: "Hello~ This is ya graphics and hype lady, Cat(alina)~ I'm trash for SHINee, BTS, Mamamoo, SNSD and many other groups that you too will most likely love as well~ I will sing the adlibs, main vocals and melody of any song and if you're lucky, dance very badly. Hope to see you all at events and get to know you!~"
    },
    {
        _id: 4,
        title: "Milanda",
        image: "./images/profile/milanda.jpg",
        position: "Marketing",
        about: ""
    },
    {
        _id: 5,
        title: "Carmel",
        image: "./images/profile/carmel.jpg",
        position: "Communications manager",
        about: ""
    },
    {
        _id: 6,
        title: "Lyn",
        image: "./images/profile/lyn.png",
        position: "Photographer",
        about: "I love BTS"
    },
    {
        _id: 7,
        title: "Ella",
        image: "./images/profile/ella.png",
        position: "Treasurer",
        about: "I’m waiting for my talent to awaken"
    },
    {
        _id: 8,
        title: "Lisa",
        image: "./images/profile/lisa.png",
        position: "Auditor",
        about: ""
    },
    {
        _id: 9,
        title: "Philippa (Phil)",
        image: "./images/profile/phil.jpg",
        position: "Event Manager",
        about: ""
    },
    {
        _id: 10,
        title: "Sophia",
        image: "./images/profile/sophia.jpg",
        position: "Secretary",
        about: "Can dab on command"
    },
];

class AboutUs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            profiles: about,
            error: null
        };
    }

    render() {
        const { classes } = this.props;
        const { isLoading, profiles, error } = this.state;

        return(
            <Fragment>
                <Grid item xs={12}>
					<Typography variant="h5" align="center" component="h1">
						Staff
					</Typography>
				</Grid>
                {error ? <LoadError message="Unable to load staff" /> : null}

                {!isLoading ? 
                    ( 
                        profiles.map((profile) => {
                            return (
                                <Grid item key={profile._id} xs={11} sm={6} md={4} lg={3}>
                                    <Card
                                        className={classes.card}
                                        elevation={3}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={profile.image}
                                            title={profile.title + "'s image"}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="h2">
                                                {profile.title}
                                            </Typography>
                                            <Typography gutterBottom variant="subtitle2" component="h3">
                                                {profile.position}
                                            </Typography>
                                            <Typography paragraph>
                                                {profile.about}
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

AboutUs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUs);
