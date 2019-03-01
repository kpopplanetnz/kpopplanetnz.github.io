import React from 'react';
import {Card, CardContent, Typography } from '@material-ui/core';

class EventCard extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { event } = this.props;
        console.log(event)
        const subtitle = event.location + " | " + event.startDateTime + " - " + event.endDateTime
        return(
            <Card
                elevation={3}
            >
                {/* <CardHeader
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={event.name}
                    subheader={subtitle}
                    /> */}
                {/* <CardMedia>
                    <div style={styles.imgContainer}>
                        <img style={styles.logo} src={sponsor.logoUrl} alt={sponsor.name + " Logo"}/>
                    </div>
                    <div>
                        
                    </div>
                </CardMedia> */}
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        {event.name}
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" component="h3">
                        {subtitle}
                    </Typography>
                    <Typography paragraph>
                        {event.description}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default EventCard