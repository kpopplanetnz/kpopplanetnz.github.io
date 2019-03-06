import React from 'react';
import { Card, CardActions, CardContent, Collapse, IconButton, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Edit, Delete } from '@material-ui/icons';
// import ShareIcon from '@material-ui/icons/Share';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import EventFormDialog from './EventFormDialog';

const styles = theme => ({
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
             duration: theme.transitions.duration.shortest,
        }),
      },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
});

class EventCard extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    sameDay(d1, d2) {
        return d1.getFullYear() === d2.getFullYear() &&
          d1.getMonth() === d2.getMonth() &&
          d1.getDate() === d2.getDate();
    }

    /**
     * Converts a date object to desired format. 
     * If no options provided returns full date
     * if options == 'HH:MM' will only return time component of date
     */
    formatDate(date, options) {
        // DDD dd MMM yyyy HH:MM
        const hours = (date.getUTCHours() + 13) > 24 ? 24 - date.getUTCHours() + 13 : date.getUTCHours() + 13;
        const minutes = date.getMinutes();
        console.log(`hours: ${hours}`)
        if (options === 'HH:MM') {
            return `${hours}:${minutes}`;
        } else {
            var settings = {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: false,
                timeZone: "Pacific/Auckland"
            };
            return date.toLocaleDateString('en-NZ', settings);
        }
    }

    render() {
        const { classes, event } = this.props;
        // Time is in ISO format, remember to change to UTC before printing
        const startDateTime = new Date(event.startDateTime)
        const endDateTime = new Date(event.endDateTime)

        // If dates are on the same day, do not repeat the day and dayDate anymore
        let time = this.formatDate(startDateTime) + " - " + this.formatDate(endDateTime, this.sameDay(startDateTime, endDateTime) ? 'HH:MM' : "");

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
                    <Typography gutterBottom variant="h5" component="h2">
                        {event.name}
                    </Typography>
                    <Typography variant="subtitle2" component="h3">
                        <strong>Location:</strong> {event.location}
                    </Typography>
                    <Typography variant="subtitle2" component="h3">
                        <strong>Time:</strong> {time}
                    </Typography>
                    <Typography paragraph variant="body1">
                        <strong>Overview:</strong>
                        <br/>
                        {event.overview}  
                    </Typography>
                    {
                        event.cost ?
                        (
                            <Typography paragraph variant="body1">
                                <strong>Cost:</strong> {event.cost}
                            </Typography>
                        ) : ""
                    }
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    {/* <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton> */}
                    <IconButton aria-label="Edit">
                        <Edit />
                    </IconButton>
                    <EventFormDialog edit event={event} />
                    <IconButton aria-label="Delete">
                        <Delete />
                    </IconButton>
                    <IconButton
                        className={classnames(classes.expand, {
                        [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph variant="body1">
                            <strong>Description:</strong>
                            <br />
                            {event.description}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        )
    }
}

export default withStyles(styles)(EventCard)