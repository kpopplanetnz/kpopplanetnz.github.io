import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Body from './components/body.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import IconButton from 'material-ui/IconButton';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends React.Component {
    render () {
        var styles = {
            'maxWidth': "100%",
            margin: "auto"
        };

        var socialMedia = (
            <div>
                <IconButton iconClassName="fa fa-facebook-official" />
                <IconButton iconClassName="fa fa-snapchat" />
                <IconButton iconClassName="fa fa-instagram" />
                <IconButton iconClassName="fa fa-twitter" />
            </div>
        );

        return (
            <MuiThemeProvider>
                <Card className="container" style={styles}>
                    <CardMedia
                        overlay={socialMedia}
                    >
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
