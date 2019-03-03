import React from 'react';
import { Card, CardActions, CardContent, Collapse, IconButton, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ShareIcon from '@material-ui/icons/Share';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

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
        const hours = date.getHours();
        const minutes = date.getMinutes();
        if (options === 'HH:MM') {
            return `${hours}:${minutes}`;
        } else {
            var settings = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
            return date.toLocaleDateString('en-NZ', settings) + ` ${hours}:${minutes}`;
        }
    }

    render() {
        const { classes, event } = this.props;
        // Time is in ISO format, remember to change to UTC before printing
        const startDateTime = new Date(event.startDateTime.replace('z', ''))
        const endDateTime = new Date(event.endDateTime.replace('z', ''))

        // If dates are on the same day, do not repeat the day and dayDate anymore
        let time = this.formatDate(startDateTime) + " till " + this.formatDate(endDateTime, this.sameDay(startDateTime, endDateTime) ? 'HH:MM' : "");

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
                    <Typography gutterBottom variant="subtitle2" component="h3">
                        Location: {event.location} 
                        <br/>
                        Time: {time}
                    </Typography>
                    <Typography paragraph variant="body1">
                        Overview: 
                        <br/>
                        {event.overview}  
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    {/* <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton> */}
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
                        <Typography paragraph variant="body1">Description:</Typography>
                        <Typography paragraph variant="body1">
                            {event.description}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        )
    }
}

export default withStyles(styles)(EventCard)