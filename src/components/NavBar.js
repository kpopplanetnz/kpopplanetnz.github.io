import React, { Fragment } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { AppBar, Tabs, Tab} from '@material-ui/core'

const styles = {
    banner: {
        maxWidth: "100%"
    },
};

class NavBar extends React.Component {
    handleCallToRouter = (value) => {
        this.props.history.push(value);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <img style={styles.banner} src="./images/FB-Banner-Final.jpg" alt="Banner"/>
                </div>
                <AppBar position="static">
                    <Tabs
                        value={this.props.history.location.pathname}
                        onChange={this.handleCallToRouter}
                        variant="fullWidth"  
                        >
                    `   <Tab label="Home" component={Link} value="/" to="/" />
                        <Tab label="Events" component={Link} value="/events" to="/events" />
                        <Tab label="Sponsors" component={Link} value="/sponsors" to="/sponsors" />
                        <Tab label="About Us" component={Link} value="/about" to="/about" />
                        {/* <Tab label="Contact Us">
                            <ContactUs/>
                        </Tab> */}
                    </Tabs>
                </AppBar>
            </Fragment>
        );
    }
}

export default withRouter(NavBar);