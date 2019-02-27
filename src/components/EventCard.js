import React from 'react';
import {Card, CardHeader, CardMedia, CardText, CardTitle} from 'material-ui/Card';
// import {Card, CardHeader, IconButton, Typography} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = {
    // lineBreak: {
    //     whiteSpace: 'pre-line'
    // }
}

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
                cols={1}
                rows={1}
                style={styles.card}
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
                <CardTitle title={event.name} subtitle={subtitle} />
                <CardText style={styles.lineBreak}>
                    <p>{event.description}</p>
                </CardText>
                {/* <Typography paragraph>
                    {event.description}
                </Typography> */}
            </Card>
        )
    }
}

export default EventCard