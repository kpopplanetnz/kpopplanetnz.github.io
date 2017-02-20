import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Home from './Home.jsx';
import Sponsors from './Sponsors.jsx';
import AboutUs from './AboutUs.jsx';
import Events from './Events.jsx';

const Body = () => (

    <Tabs>
        <Tab label="Home">
            <Home/>
        </Tab>
        <Tab label="Events">
            <Events/>
        </Tab>
        <Tab label="Sponsors">
            <Sponsors/>
        </Tab>
        <Tab label="About Us">
            <AboutUs/>
        </Tab>
    </Tabs>
)


export default Body;