import React from 'react';
import {GridList} from 'material-ui/GridList';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';

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
};

const about = [
    {
        title: "Jack",
        image: "./images/profile/jack.jpg",
        position: "President",
        about: "Kpop fan of many groups. Love to meet new people. Yoona bae for lyfe <3"
    },
    {
        title: "Yubo",
        image: "./images/profile/yubo.jpg",
        position: "Vice/ Treasurer",
        about: ""
    },
    {
        title: "Karen",
        image: "./images/profile/karen.jpg",
        position: "Secretary",
        about: ""
    },
    {
        title: "Holly",
        image: "./images/profile/holly.png",
        position: "Secretary in training",
        about: ""
    },
    {
        title: "Catalina",
        image: "./images/profile/cat.jpg",
        position: "Graphics Designer",
        about: ""
    },
    {
        title: "Jason",
        image: "./images/profile/ting.jpg",
        position: "Senior Advisor",
        about: ""
    },
    {
        title: "Alena",
        image: "./images/profile/alena.jpg",
        position: "Events Manager",
        about: "Hi! It's my first year in this committee so I'm really excited to meet more K-Pop fans! My ultimate bias group is EXO, though I'm multifandom af with other groups like SHINee, SHINHWA, Red Velvet and the list goes on.  If you see me around, don't be shy :)"
    },
    {
        title: "Minseok",
        image: "./images/profile/min.jpg",
        position: "Events Manager",
        about: "Hi everyone. My name is Min and my role is to organise events for you guys. My bias groups are G.O.D.,  Mamamoo and Twice. I hope you guys enjoy our events and have an amazing year. :)"
    },
    {
        title: "Sharmine",
        image: "./images/profile/sharmine.png",
        position: "Soical Media Manager",
        about: "Hi!! Enjoy our events and lets make a good friendship ^^~"
    },
    {
        title: "Shamal",
        image: "./images/profile/shamal.png",
        position: "Soical Media Manager",
        about: ""
    },
    {
        title: "Czarina",
        image: "./images/profile/czarina.jpg",
        position: "Graphic Designer",
        about: ""
    },
]

const AboutUs = () => (
    <div style={styles.root}>
        <GridList
            cols={2}
            cellHeight={'auto'}
            padding={1}
            style={styles.gridList}
        >
        {about.map((data) => (
            <Card
                cols={1}
                rows={1}
                key={data.title}
            >
                <CardMedia>
                    <img src={data.image}/>
                </CardMedia>
                <CardTitle title={data.title} subtitle={data.position} />
                <CardText>
                    {data.about}
                </CardText>
            </Card>
        ))}
        </GridList>
    </div>
)

export default AboutUs;