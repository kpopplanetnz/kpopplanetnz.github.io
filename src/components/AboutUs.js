import React from 'react';
import {Card, CardContent, CardMedia, Grid, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    // Make sure all cards have same height
    card: {
        height: '100%'
    },
});

const about = [
    {
        _id: 0,
        title: "Jack",
        image: "./images/profile/jack.jpg",
        position: "President",
        about: "Welcome to Kpop Planet, hope you enjoy your time here with us!! Kpop fan of many groups. Love to meet new people. Yoona bae for lyfe <3"
    },
    {
        _id: 1,
        title: "Shamal",
        image: "./images/profile/shamal.png",
        position: "Vice President / Social Media",
        about: "Hi there! I'm K-pop Planet's resident Llama and your vice-president/social media manager for 2017~ I’ve made some of my best friends through K-pop Planet, so you definitely can too! Talk to me about your favourite groups (especially if they're either VIXX or EXID), and let's get to know each other better this year! Please anticipate our fun events!!! （≧∇≦）"
    },
    {
        _id: 2,
        title: "Yubo",
        image: "./images/profile/yubo.jpg",
        position: "Treasurer",
        about: "Hello and welcome to Kpop Planet! I am a Twice, Red Velvet and Girls' Generation trash. I look forward to meeting you at our events!"
    },
    {
        _id: 3,
        title: "Karen",
        image: "./images/profile/karen.jpg",
        position: "Secretary",
        about: "Fav Groups: Big Bang, +Multifandom (we'll be here all day). I look forward to meeting you all and fangirling/fanboying over the greatness that is Kpop."
    },
    {
        _id: 4,
        title: "Holly",
        image: "./images/profile/holly.png",
        position: "Secretary in training",
        about: "Lorem ipsum dolor sit amet, in vis dicta erant, impedit gloriatur vim ne, ne per sonet option incorrupte. Novum legimus et duo, ea habeo consequuntur cum, sea mutat essent eu. Nam ea dissentias intellegebat."
    },
    {
        _id: 5,
        title: "Catalina",
        image: "./images/profile/cat.jpg",
        position: "Graphics Designer",
        about: "Hello~ This is ya graphics and hype lady, Cat(alina)~ I'm trash for SHINee, BTS, Mamamoo, SNSD and many other groups that you too will most likely love as well~ I will sing the adlibs, main vocals and melody of any song and if you're lucky, dance very badly. Hope to see you all at events and get to know you!~"
    },
    {
        _id: 6,
        title: "Jason",
        image: "./images/profile/ting.jpg",
        position: "Senior Advisor",
        about: "Within the few hours of club events, we hope to provide everyone a fun and safe place to hang out and away from uni stress. I hope you will come along and be apart of our family. Hope to meet you all soon."
    },
    {
        _id: 7,
        title: "Alena",
        image: "./images/profile/alena.jpg",
        position: "Events Manager",
        about: "Hi! It's my first year in this committee so I'm really excited to meet more K-Pop fans! My ultimate bias group is EXO, though I'm multifandom af with other groups like SHINee, SHINHWA, Red Velvet and the list goes on.  If you see me around, don't be shy :)"
    },
    {
        _id: 8,
        title: "Minseok",
        image: "./images/profile/min.jpg",
        position: "Events Manager",
        about: "Hi everyone. My name is Min and my role is to organise events for you guys. My bias groups are G.O.D., Mamamoo and Twice. I hope you guys enjoy our events and have an amazing year. :)"
    },
    {
        _id: 9,
        title: "Sharmine",
        image: "./images/profile/sharmine.png",
        position: "Social Media Manager",
        about: "Hi!! Enjoy our events and lets make a good friendship ^^~"
    },
    {
        _id: 10,
        title: "Czarina",
        image: "./images/profile/czarina.jpg",
        position: "Graphics Designer",
        about: "Welcome to K-pop Planet! I'm the introvert dinosaur of the club. I listen and stan alot of groups and genre. I am looking forward to meet and interact with every single one of you legendary fans!"
    },
];

class AboutUs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            about: about
        };
    }

    render() {
        const { classes } = this.props;
        return(
            <Grid container spacing={24} justify="center">
                <Grid item xs={12}>
					<Typography variant="h5" align="center" component="h1">
						Staff
					</Typography>
				</Grid>
                {
                    this.state.loading 
                    ? <Typography gutterBottom variant="caption" component="p">Loading in progress</Typography> 
                    : this.state.about === undefined || this.state.about.length == 0
                        ? <Typography gutterBottom variant="body1" component="p">Unable to load staff</Typography>
                        : this.state.about.map((data) => {
                        return (
                            <Grid item key={data._id} xs={11} sm={6} md={4} lg={3}>
                                <Card
                                    className={classes.card}
                                    elevation={3}
                                >
                                    <CardMedia
                                        component="img"
                                        image={data.image}
                                        title={data.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="h2">
                                            {data.title}
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle2" component="h3">
                                            {data.position}
                                        </Typography>
                                        <Typography paragraph>
                                            {data.about}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                })}
            </Grid>
            // <div style={styles.root}>
            //     <GridList
            //         cols={this.state.cols}
            //         cellHeight={'auto'}
            //         padding={1}
            //         style={styles.gridList}
            //     >
            //         {
            //             about.map((data) => (
            //                 <Card
            //                     cols={1}
            //                     rows={1}
            //                     key={data.title}
            //                 >
            //                     <CardMedia
            //                         component="img"
            //                         image={data.image}
            //                         title={data.title}
            //                     >
            //                         {/* <img src={data.image} alt={data.title}/> */}
            //                     </CardMedia>
            //                     <Typography gutterBottom variant="h6" component="h2">
            //                         {data.title}
            //                     </Typography>
            //                     <Typography gutterBottom variant="subtitle2" component="h3">
            //                         {data.position}
            //                     </Typography>
            //                     <Typography paragraph>
            //                         {data.about}
            //                     </Typography>
            //                 </Card>
            //             ))
            //         }
            //     </GridList>
            // </div>
        );
    }
}

AboutUs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUs);
