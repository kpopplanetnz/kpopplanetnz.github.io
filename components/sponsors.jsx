import React from 'react';
import {List, ListItem} from 'material-ui/List';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        color: 'gray',
    },
    card: {
        flexBasis: '70%',
    },
    list: {
        flexBasis: '30%',
        backgroundColor: '#e5e5e5',
    },
};

const sponsorList = [
    {
        name: 'Gong Cha',
        logo: './images/sponsors/gong-cha.jpg', 
        location: 'Queen St, Lorne St, Newmarket',
        about: '1 FREE topping per drink at selected stores.'
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
    }
]

var Sponsors = React.createClass({

    onClick: function(sponsor){
        this.setState({
            sponsor: sponsor
        });
    },

    getInitialState: function(){
        return {
            sponsor: sponsorList[0]
        };
    },

    render: function(){
        return (
        <div style={styles.root}>
            <List style={styles.list}>
            {sponsorList.map((sponsor) => (
                <ListItem primaryText={sponsor.name} key={sponsor.name} onTouchTap={this.onClick.bind(this,sponsor)}/>
            ))}
            </List> 
            <Card
                style={styles.Card}
            >
            <CardMedia>
                <img src={this.state.sponsor.logo} />
                <CardTitle title={this.state.sponsor.name} subtitle={this.state.sponsor.location} />
            </CardMedia>
            <CardText>
                {this.state.sponsor.about}
            </CardText>
            </Card>
        </div>
        )
    }
});

export default Sponsors;