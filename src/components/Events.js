import React from 'react';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {GridList} from 'material-ui/GridList';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';

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
		fetch("http://localhost:3001/event")
		.then(results => {
			return results.json();
		}).then(data => {
			const retrievedEvents = data.map((event) => {
				const subtitle = event.location + " | " + event.startDateTime + " - " + event.endDateTime;
				return(
                    <Card
                        cols={1}
                        rows={1}
                        key={event.eventID}
                        style={styles.card}
                    >
                        {/* <CardMedia>
                            <div style={styles.imgContainer}>
                                <img style={styles.logo} src={sponsor.logoUrl} alt={sponsor.name + " Logo"}/>
                            </div>
                            <div>
                                
                            </div>
                        </CardMedia> */}
						<CardTitle title={event.name} subtitle={subtitle} />
                        <CardText style={styles.lineBreak}>
							<p>{event.description}</p>
                        </CardText>
                    </Card>
                )
			});
			this.setState({events: retrievedEvents});
		});
	}

	render() {
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
						{this.state.events}
					</GridList>
				</div>
			</div>
		);
	}
}

export default Events;