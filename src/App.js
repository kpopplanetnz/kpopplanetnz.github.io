// Import react related stuff
import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// Import material ui related stuff
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// Import components
import NavBar from './components/NavBar';
import Body from './components/Body';
import Footer from './components/Footer';
// Import css / images
import './css/site.css';
import { CssBaseline, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#00bcd4",
             contrastText: "#fff"
        }
    },
    typography: {
        useNextVariants: true,
    }
});

const styles = theme => ({
    layout: {
        width: 'auto',
        [theme.breakpoints.up("sm")]: {
          width: "80%",
          marginLeft: 'auto',
          marginRight: 'auto',
        }
    },
    page: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    }
});

class App extends React.Component {
    constructor () {
        super();
         // Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
        ReactGA.initialize('UA-99101004-1');
        // This just needs to be called once since we have no routes in this case.
        ReactGA.pageview(window.location.pathname);
    }

    render () {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <div className={classes.layout}>
                        <NavBar />
                        <Paper className={classes.page} square={true}>
                            <Body/>
                            <Footer />
                        </Paper>
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(App);