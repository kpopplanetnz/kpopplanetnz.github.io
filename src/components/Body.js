import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import Home from './Home';
import Sponsors from './Sponsors';
import AboutUs from './AboutUs';
import Events from './Events';
import NotFoundError from './error/NotFoundError';
import ContactUs from './ContactUs';

class Body extends React.Component {     
    render() {
        return(
            <main>
                <Grid container spacing={24} justify="center">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/events" component={Events}/>
                        <Route path="/sponsors" component={Sponsors}/>
                        <Route path="/about" component={AboutUs}/>
                        <Route exact path="/contact" component={ContactUs}/>
                        <Route component={NotFoundError}/>
                    </Switch>
                </Grid>
            </main>
        );
    }
}

export default Body;