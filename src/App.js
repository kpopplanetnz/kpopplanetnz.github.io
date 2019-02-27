// Import react related stuff
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactGA from 'react-ga';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Import material ui related stuff
// import {Card, CardActions, CardMedia} from 'material-ui/Card';
import {Card, CardActions, CardMedia} from '@material-ui/core'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
// Import components
import Body from './components/Body';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';
// Import css / images
import './css/site.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const theme = createMuiTheme({
    palette: {
        primary: lightBlue
    }
});

const styles = {
    container: {
        maxWidth: "100%",
        margin: "auto",
    },
    banner: {
        maxWidth: "100%"
    }
};

class App extends React.Component {
    constructor () {
        super();
         // Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
        ReactGA.initialize('UA-99101004-1');
        // This just needs to be called once since we have no routes in this case.
        ReactGA.pageview(window.location.pathname);
    }

    render () {
        

        return (
            <MuiThemeProvider theme={theme}>
                <BrowserRouter>
                    <Card className="container" style={styles.container}>
                        <CardMedia>
                            <img style={styles.banner} src="./images/FB-Banner-Final.jpg" alt="Banner"/>
                        </CardMedia>
                        <CardActions>
                            <Body/>
                            {/* <NavTabs /> */}
                            <hr />
                            <Footer />
                        </CardActions>
                    </Card>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

export default App;