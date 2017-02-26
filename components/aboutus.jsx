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
        about: "Hello~ This is ya graphics and hype lady, Cat(alina)~ I'm trash for SHINee, BTS, Mamamoo, SNSD and many other groups that you too will most likely love as well~ I will sing the adlibs, main vocals and melody of any song and if you're lucky, dance very badly. Hope to see you all at events and get to know you!~"
    },
    {
        title: "Jason",
        image: "./images/profile/ting.jpg",
        position: "Senior Advisor",
        about: "Within the few hours of club events, we hope to provide everyone a fun and safe place to hang out and away from uni stress. I hope you will come along and be apart of our family. Hope to meet you all soon."
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

var AboutUs = React.createClass({
    onResize: function(){
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if(width < 800){
            this.setState({cols: 2})
        } else if (width < 1201){
            this.setState({cols: 3})
        } else if (width < 1601){
            this.setState({cols: 4})
        } else {
            this.setState({cols: 5})
        }
    },

    getInitialState: function() {
        return {
            cols: 2
        };
    },

    componentDidMount: function() {
        window.addEventListener("resize", this.onResize);
    },
    componentWillUnmount: function() {
        window.removeEventListener("resize", this.onResize);
    },

    render: function(){
        return(
        <div style={styles.root}>
            <GridList
                cols={this.state.cols}
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
                    <CardMedia
                        overlay={<CardTitle title={data.title} subtitle={data.position} />}
                    >
                        <img src={data.image}/>
                    </CardMedia>
                    <CardText>
                        {data.about}
                    </CardText>
                </Card>
            ))}
            </GridList>
        </div>
        );
    }
});

export default AboutUs;