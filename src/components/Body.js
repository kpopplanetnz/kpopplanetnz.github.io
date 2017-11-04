import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Home from './Home';
import Sponsors from './Sponsors';
import AboutUs from './AboutUs';
import Events from './Events';

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
);

export default Body;