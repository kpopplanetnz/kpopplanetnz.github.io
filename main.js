import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Body from './components/body.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends React.Component {
  	render () {
  		var styles = {
  			'maxWidth': "1000px",
  			margin: "auto"
  		};
		return (
			<MuiThemeProvider>
				<Card style={styles}>
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
