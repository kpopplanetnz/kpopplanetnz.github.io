import React from 'react';
import {Route, Link, Switch, withRouter} from 'react-router-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
// import {Tabs, Tab} from '@material-ui/core'
import Home from './Home';
import Sponsors from './Sponsors';
import AboutUs from './AboutUs';
import Events from './Events';
import NotFound from './NotFound';
import ContactUs from './ContactUs';

class Body extends React.Component {
    handleCallToRouter = (value) => {
        this.props.history.push(value);
    }
     
    render() {
        return(
            <div>
                <Tabs
                    // value={this.props.history.location.pathname}
                    // onChange={this.handleCallToRouter}
                    // variant="fullWidth"
                    >
                    `<Tab label="Home" component={Link} to="/">
                        {/* <Home/> */}
                    </Tab>
                    <Tab label="Events" component={Link} to="/events">
                        {/* <Events/> */}
                    </Tab>
                    <Tab label="Sponsors" component={Link} to="/sponsors">
                        {/* <Sponsors/> */}
                    </Tab>
                    <Tab label="About Us" component={Link} to="/about">
                        {/* <AboutUs/> */}
                    </Tab>
                    {/* <Tab label="Contact Us">
                        <ContactUs/>
                    </Tab> */}
                </Tabs>
                <Switch>
                    <Route exact path="/" Component={Home}/>
                    <Route path="/events" Component={Events}/>
                    <Route path="/sponsors" Component={Sponsors}/>
                    <Route path="/about" Component={AboutUs}/>
                    <Route Component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(Body);