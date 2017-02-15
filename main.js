import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Header from './components/header.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends React.Component {
  render () {
	return (
	<MuiThemeProvider>
		<Card>
			<CardMedia>
				<img src="./pictures/FB-Banner-Final.jpg"/>
			</CardMedia>
			<CardText>
    			<Header/>
			</CardText>
		</Card>
  	</MuiThemeProvider>
  	);
  }
}

render(<App/>, document.getElementById('app'));
