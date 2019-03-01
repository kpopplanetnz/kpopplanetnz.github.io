import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import EventCard from './EventCard';
import { Typography } from '@material-ui/core';

// const Events = () => (
	// <div>
    // 	<h2>Up and Coming Events</h2>
    // 	{/* <List>
    // 		<ListItem primaryText="New Member's Night"
    // 			secondaryText="Friday 10th March 6:30pm"
    // 			rightIcon={ <RaisedButton label="Details" onTouchTap={membersClick}/>}
    			
	// 		/>
	// 		<Divider/>
    // 		<ListItem primaryText="Running Man"
    // 			secondaryText="Saturday 25th March 10am"
    // 			rightIcon={ <RaisedButton label="Details" onTouchTap={runningClick}/>}
	// 		/>
	// 	</List> */}
	// 	<p>There are no more events this year, stay tuned for events in 2018</p>
	// </div>
// );


const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	// paper: {
	// 	padding: theme.spacing.unit * 2,
	// 	textAlign: 'center',
	// 	color: theme.palette.text.secondary,
	// }
});

class Events extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
            loading: true,
            events: []
        };
	}

	componentDidMount() {
		// Refer for https://developers.facebook.com/docs/javascript/advanced-setup
		// window.fbAsyncInit = function() {
		// 	window.FB.init({
		// 	  appId            : '2424224081137035',
		// 	  autoLogAppEvents : true,
		// 	  xfbml            : false, //We do not use any other social media plugins
		// 	  version          : 'v2.10'
		// 	});
		// 	window.FB.AppEvents.logPageView();
		// };

		// (function(d, s, id){
		// 	var js, fjs = d.getElementsByTagName(s)[0];
		// 	if (d.getElementById(id)) {return;}
		// 	js = d.createElement(s); js.id = id;
		// 	js.src = "https://connect.facebook.net/en_US/sdk.js";
		// 	fjs.parentNode.insertBefore(js, fjs);
		// }(document, 'script', 'facebook-jssdk'));
		fetch("http://localhost:3001/api/events")
		.then(results => {
			return results.json();
		}).then(data => {
			// const retrievedEvents = data.map((event) => {
			// 	return(
            //         <EventCard cols={1} rows={1} key={event._id} event={event}/>
            //     )
			// });
			this.setState({events: data});
		});
		this.setState({loading: false});
	}

	render() {
		const { classes } = this.props;

		return (
			<Grid container spacing={24} justify="center">
				<Grid item xs={12}>
					<Typography variant="h5" align="center" component="h1">
						Up and Coming Events
					</Typography>
				</Grid>
				{
					this.state.loading 
					? <Typography gutterBottom variant="caption" component="p">Loading in progress</Typography> 
					: this.state.events === undefined || this.state.events.length == 0
						? <Typography gutterBottom variant="body1" component="p">No events available at the moment :(</Typography>
						: this.state.events.map((event) => {
							return(
								<EventCard key={event._id} event={event}/>
							);		
						})
				}
			</Grid>
		);
	}
}

Events.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Events);