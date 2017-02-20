import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import {List, ListItem} from 'material-ui/List';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        color: 'gray',
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
    },
    card: {
        flexBasis: '70%',
    },
    list: {
        flexBasis: '30%',
        backgroundColor: '#e5e5e5',
    },
    sponsor: {
        padding: 10,
        textAlign: 'right',
    },
};

const tilesData = [
    {
        img: './images/FB-Banner-Final.jpg',
        title: 'Sponsor 1',
        //author: 'jill111',
        active: true
    },
    {
        img: './images/FB-Banner-Final.jpg',
        title: 'Sponsor 2',
    }
]

const Sponsors = () => (
    <div style={styles.root}>
        <List style={styles.list}>
            {/*<ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />*/}
            <ListItem primaryText="Sponsor 1" />
            <ListItem primaryText="Sponsor 2" />
        </List> 
        {tilesData.map((tile) => (
            <div 
                key={tile.title}
                className={tile.active ? "active" : "hidden"}
                style={styles.card}
            >
                <Sponsor title={tile.title}></Sponsor>
            </div>
        ))}
  </div>
)

function Sponsor(props) {
    return (
        <div style={styles.sponsor}>
            <h1>{props.title}</h1>
        </div>
    )
}

function toggleActive(props) {
    tilesData[props.primaryText].active = !tile.active
}

export default Sponsors;