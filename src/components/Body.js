import React from 'react';
import {withRouter} from 'react-router-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import Home from './Home';
import Sponsors from './Sponsors';
import AboutUs from './AboutUs';
import Events from './Events';
import ContactUs from './ContactUs';

class Body extends React.Component {
    handleCallToRouter = (value) => {
        this.props.history.push(value);
    }
     
    render() {
        return(
            <Tabs
                value={this.props.history.location.pathname}
                onChange={this.handleCallToRouter}
                >
                `<Tab label="Home" value="/">
                    <Home/>
                </Tab>
                <Tab label="Events" value="/events">
                    <Events/>
                </Tab>
                <Tab label="Sponsors" value="/sponsors">
                    <Sponsors/>
                </Tab>
                <Tab label="About Us" value="/aboutus">
                    <AboutUs/>
                </Tab>
                {/* <Tab label="Contact Us">
                    <ContactUs/>
                </Tab> */}
            </Tabs>
        );
    }
}

export default withRouter(Body);