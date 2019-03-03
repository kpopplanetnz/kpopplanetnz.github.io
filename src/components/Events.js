import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import EventCard from './EventCard';
import { Typography } from '@material-ui/core';

import LoadError from './error/LoadError';

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
						events.length === 0 && !error ? <Typography gutterBottom variant="body1" component="p">No events available at the moment :(</Typography> : 
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

export default Events;