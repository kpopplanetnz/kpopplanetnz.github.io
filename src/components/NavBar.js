import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { AppBar, Hidden, Tabs, Tab} from '@material-ui/core'
import { Home, EventNote, Star, Info, ContactSupport } from '@material-ui/icons';

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
                        <Tab component={Link} value="/" to="/" icon={<Home />}
                            label={
                                <Hidden only="xs">
                                    Home
                                </Hidden>
                            }/>
                        <Tab component={Link} value="/events" to="/events" icon={<EventNote />}
                            label={
                                <Hidden only="xs">
                                    Events
                                </Hidden>
                            }/>
                        <Tab component={Link} value="/sponsors" to="/sponsors" icon={<Star />}
                            label={
                                <Hidden only="xs">
                                    Sponsors
                                </Hidden>
                            }/>
                        <Tab component={Link} value="/about" to="/about" icon={<Info />}
                             label={
                                <Hidden only="xs">
                                    About
                                </Hidden>
                             }/>
                        <Tab component={Link} value="/contact" to="/contact" icon={<ContactSupport />}
                            label={
                                <Hidden only="xs">
                                    Contact
                                </Hidden>
                            }/>
                    </Tabs>
                </AppBar>
            </Fragment>
        );
    }
}

export default withRouter(NavBar);