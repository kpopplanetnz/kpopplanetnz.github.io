import React from 'react';
import {GridList} from 'material-ui/GridList';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styles = {
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
    }
};

const sponsorList = [
    {
        name: 'Gong Cha',
        logo: './images/sponsors/gong-cha.jpg', 
        location: 'Queen St, Lorne St, Newmarket',
        about: '1 FREE topping per drink at selected stores.'
        //author: 'jill111',
    },
    {
        name: 'The Don',
        logo: './images/sponsors/the-don.png',
        location: '47 High St, Auckland, 1010',
        about: '10% off any purchase.'
    },
    {
        name: 'Bruce Lee Sushi',
        logo: './images/sponsors/bruce-lee-sushi.png',
        location: '4/18-26 Wellesley Street (Opposite to Auckland City Library)',
        about: '10% off any purchase. (Not to be used with any other discount. e.g. Special of the day)'
    },
    {
        name: 'Nashi Lab',
        logo: './images/sponsors/nashi-lab.png',
        location: 'http://nashilab.co.nz',
        about: 'Authentic Korean makeup that works. Sponsors prizes for events. Promo code coming soon'
    },
    {
        name: 'Yohgurt Story',
        logo: './images/sponsors/yohgurt-story.png',
        location: '166/174 Queen St, City Centre, Auckland 1010',
        about: '10% off any purchase.'
    },
    {
        name: 'Hokkaido Baked Cheese Tart',
        logo: './images/sponsors/hbct.jpg',
        location: '5/350 Queen Street, Auckland 1010',
        about: 'Buy 5 get 1 tart free.'
    }
];

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
        window.addEventListener("resize", this.onResize);
        fetch("https://kpopplanet-dev.azurewebsites.net/Sponsors/Get")
        .then(results => {
            return results.json();
        }).then(data => {
            let retrievedSponsors = data.map((sponsor) => {
                sponsor.description = sponsor.description.replace("\\n", '\n')
                return(
                    <Card
                        cols={1}
                        rows={1}
                        key={sponsor.name}
                        style={styles.card}
                    >
                        <CardMedia>
                            <div style={styles.imgContainer}>
                                <img style={styles.logo} src={sponsor.logoUrl} alt={sponsor.name + " Logo"}/>
                            </div>
                            <div>
                                <CardTitle title={sponsor.name} subtitle={sponsor.location} />
                            </div>
                        </CardMedia>
                        <CardText style={styles.lineBreak}>
                            {sponsor.description}
                        </CardText>
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
        return(
            <div style={styles.root}>
                <GridList
                    cols={this.state.cols}
                    cellHeight={'auto'}
                    padding={1}
                    style={styles.gridList}
                >
                    {this.state.sponsors}
                </GridList>
            </div>
        );
    }
}

export default Sponsors;