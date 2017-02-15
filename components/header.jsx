import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

const Header = () => (

	<Tabs>
		<Tab label="Home">
			<h2>This is Home</h2>
		</Tab>
		<Tab label="Sponsors">
			<h2>This is Sponsors</h2>
		</Tab>
		<Tab label="About Us">
			<h2>This is About Us</h2>
		</Tab>
	</Tabs>
)


export default Header;