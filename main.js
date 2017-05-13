import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Body from './components/body.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import IconButton from 'material-ui/IconButton';
import ReactGA from 'react-ga';

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
            'maxWidth': "100%",
            margin: "auto"
        };

        return (
            <MuiThemeProvider>
                <Card className="container" style={styles}>
                    <CardMedia>
                        <img src="./images/FB-Banner-Final.jpg"/>
                    </CardMedia>
                    <CardActions>
                        <Body/>
                    </CardActions>
                </Card>
            </MuiThemeProvider>
        );
    }
}

render(<App/>, document.getElementById('app'));
