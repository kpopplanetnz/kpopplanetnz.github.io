import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import {Tabs, Tab} from 'material-ui/Tabs';

import Home from './Home';
import Sponsors from './Sponsors';
import AboutUs from './AboutUs';
import Events from './Events';
import NotFound from './NotFound';
import ContactUs from './ContactUs';

class Body extends React.Component {     
    render() {
        return(
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/events" component={Events}/>
                <Route path="/sponsors" component={Sponsors}/>
                <Route path="/about" component={AboutUs}/>
                <Route component={NotFound}/>
            </Switch>
        );
    }
}

export default Body;