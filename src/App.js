// Import react related stuff
import React from 'react';
import ReactGA from 'react-ga';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Import material ui related stuff
import {Card, CardActions, CardMedia} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Import components
import Body from './components/Body';
// Import css / images
import './css/site.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends React.Component {
    constructor () {
        super();
         // Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
        ReactGA.initialize('UA-99101004-1');
        // This just needs to be called once since we have no routes in this case.
        ReactGA.pageview(window.location.pathname);
    }

    render () {
        var styles = {
            maxWidth: "100%",
            margin: "auto"
        };

        return (
            <MuiThemeProvider>
                <Card className="container" style={styles}>
                    <CardMedia>
                        <img src="./images/FB-Banner-Final.jpg" alt="Banner"/>
                    </CardMedia>
                    <CardActions>
                        <Body/>
                    </CardActions>
                </Card>
            </MuiThemeProvider>
        );
    }
}

export default App;