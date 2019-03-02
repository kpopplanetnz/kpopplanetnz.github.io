import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import EventCard from './EventCard';
import { Typography } from '@material-ui/core';

import LoadError from './error/LoadError';

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
        	isLoading: true,
			events: [],
			error: null
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
		.then(results => results.json())
		.then(data => {
			this.setState({
                events: data,
                isLoading: false
            });
		})
		.catch(error => {
            console.error(error);
            this.setState({
                error,
                isLoading: false
            });
        });
	}

	render() {
		const { classes } = this.props;
		const { isLoading, events, error } = this.state;

		return (
			<Fragment>
				<Grid item xs={12}>
					<Typography variant="h5" align="center" component="h1">
						Up and Coming Events
					</Typography>
				</Grid>
				{error ? <LoadError message="Unable to load events" /> : null}

				{!isLoading ? 
					(	
						events.length == 0 && !error ? <Typography gutterBottom variant="body1" component="p">No events available at the moment :(</Typography> : 
						events.map((event) => {
							return(
								<Grid item key={event._id} xs={12}>
									<EventCard event={event}/>
								</Grid>
							);		
						})
					) : (
						<Typography gutterBottom variant="caption" component="p">Loading in progress</Typography>
					)
				}
			</Fragment>
		);
	}
}

Events.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Events);