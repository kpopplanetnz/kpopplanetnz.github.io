import React from 'react';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

const membersClick = function(){
	window.open("https://www.facebook.com")
}

const runningClick = function(){
	window.open("https://www.facebook.com")
}

const Events = () => (
	<div>
    	<h2>Up and Coming Events</h2>
    	<List>
    		<ListItem primaryText="New Member's Night"
    			secondaryText="Friday 10th March 6:30pm"
    			rightIcon={ <RaisedButton label="Details"/>}
    			onTouchTap={membersClick}
			/>
			<Divider/>
    		<ListItem primaryText="Running Man"
    			secondaryText="Saturday 25th March 10am"
    			rightIcon={ <RaisedButton label="Details"/>}
    			onTouchTap={runningClick}
			/>
    	</List>
	</div>

)

export default Events;