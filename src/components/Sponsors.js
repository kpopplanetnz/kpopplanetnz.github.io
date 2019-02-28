import React from 'react';
import GridList from '@material-ui/core/GridList';
import {Card, CardMedia, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles' 
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        //width: 500,
        //height: 450,
        overflowY: 'auto',
    },
    logo: {
        height: '250px',
        width: 'auto',
        maxWidth: 'none',
        minWidth: 'none',
    },
    imgContainer: {
        overflow: 'hidden',
        textAlign: 'center',
    },
    lineBreak: {
        whiteSpace: 'pre-line'
    },
    card: {
        padding: 20,
    },
    media: {
        height: 250,
        width: "auto",
        marginLeft: "auto",
        marginRight: "auto"
    }
});

class Sponsors extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cols: 2,
            sponsors: []
        };

        this.onResize = this.onResize.bind(this);
    }

    onResize() {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (width < 570) {
            this.setState({cols: 1})
        } else if(width < 800) {
            this.setState({cols: 2})
        } else if (width < 1201) {
            this.setState({cols: 3})
        } else if (width < 1601) {
            this.setState({cols: 4})
        } else {
            this.setState({cols: 5})
        }
    }

    componentWillMount() {
        this.onResize();
    }

    componentDidMount() {
        const { classes } = this.props;

        window.addEventListener("resize", this.onResize);
        fetch("https://kpopplanet-dev.azurewebsites.net/Sponsors/Get")
        .then(results => {
            return results.json();
        }).then(data => {
            let retrievedSponsors = data.map((sponsor) => {
                sponsor.description = sponsor.description.replace("\\n", '\n')
                return(
                    <Card
                        key={sponsor.name}
                        // style={styles.card}
                        className={classes.card}
                    >
                        <CardMedia
                            className={classes.media}
                            component="img"
                            image={sponsor.logoUrl}
                            title={sponsor.name + " Logo"}
                        >
                            {/* <div style={styles.imgContainer}>
                                <img style={styles.logo} src={sponsor.logoUrl} alt={sponsor.name + " Logo"}/>
                            </div>
                            <div>
                                <CardTitle title={sponsor.name} subtitle={sponsor.location} />
                            </div> */}
                        </CardMedia>
                        <Typography variant="h6" component="h2">
                            {sponsor.name}
                        </Typography>
                        <Typography gutterBottom variant="caption" component="p">
                            {sponsor.location}
                        </Typography>
                        <Typography paragraph style={styles.lineBreak}>
                            {sponsor.description}
                        </Typography>
                    </Card>
                )
            })
            this.setState({sponsors: retrievedSponsors});
            // console.log("state", this.state.sponsors);
        })
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize);
    }

    render() {
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <GridList
                    cols={this.state.cols}
                    cellHeight={'auto'}
                    padding={1}
                    spacing={30}
                    // style={styles.gridList}
                    className={classes.gridList}
                >
                    {this.state.sponsors}
                </GridList>
            </div>
        );
    }
}

Sponsors.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sponsors);