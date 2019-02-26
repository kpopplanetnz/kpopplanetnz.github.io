import React from 'react';
import {GridList} from '@material-ui/core';
import EventCard from './EventCard';

const membersClick = function() {
	window.open("https://www.facebook.com")
};

const runningClick = function() {
	window.open("https://www.facebook.com")
};

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

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        //width: 500,
        //height: 450,
        overflowY: 'auto',
    },
    imgContainer: {
        overflow: 'hidden',
        textAlign: 'center',
    },
    lineBreak: {
        whiteSpace: 'pre-line'
    }
};

class Events extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
            cols: 1,
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
			const retrievedEvents = data.map((event) => {
				return(
                    <EventCard key={event._id} event={event}/>
                )
			});
			this.setState({events: retrievedEvents});
		});
	}

	render() {
		let events = this.state.events;
		if (this.state.events === undefined || this.state.events.length == 0) {
			events = <p>There are currently no events scheduled.</p>;
		}

		return (
			<div>
				<h2>Up and Coming Events</h2>
				{/* <List>
					<ListItem primaryText="New Member's Night"
						secondaryText="Friday 10th March 6:30pm"
						rightIcon={ <RaisedButton label="Details" onTouchTap={membersClick}/>}
						
					/>
					<Divider/>
					<ListItem primaryText="Running Man"
						secondaryText="Saturday 25th March 10am"
						rightIcon={ <RaisedButton label="Details" onTouchTap={runningClick}/>}
					/>
				</List> */}
				{/* <p>There are no more events this year, stay tuned for events in 2018</p> */}
				<div style={styles.root}>
					<GridList
						cols={this.state.cols}
						cellHeight={'auto'}
						padding={1}
						style={styles.gridList}
					>
						{events}
						
					</GridList>
				</div>
			</div>
		);
	}
}

export default Events;