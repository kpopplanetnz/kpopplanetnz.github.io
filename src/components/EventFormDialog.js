import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

export default class EventFormDialog extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
			open: false,
			isEdit: props.edit,
			event: {
				name: '',
				overview: '',
				description: '',
				cost: '',
				location: '',
				startDateTime: '',
				endDateTime: '',
				isActive: true,
				// Just for date time manipulation only
			},
			dateOptions: {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
			},
			timeOptions: {
				hour: 'numeric',
                minute: 'numeric',
                hour12: false,
			}
		};

		this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        if (this.state.isEdit) {
            const { event } = this.props;
			this.setState({ event });
        }
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
		this.setState({ open: false });
		console.log(this.state.event)
	};
	
	handleInput(e) {
		let value = e.target.value;
		let name = e.target.name;
		this.setState(
			prevState => {
				return { 
					event: {
						...prevState.event, 
						[name]: value
					}
				}
			}
			// , () => console.log(`${name}: ${value}`)
		)
	}

	handleDateTime(e) {
		let time = e.target.value;
		console.log(typeof(time))
	}

    render() {
		const { event, isEdit, dateOptions, timeOptions } = this.state;

        return (
            <div>
                <IconButton aria-label="Edit" onClick={this.handleClickOpen}>
                    <EditIcon />
                </IconButton>
                <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">{isEdit ? "Edit" : "Create"} Event</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                          To subscribe to this website, please enter your email address here. We will send
                          updates occasionally.
                        </DialogContentText>
                        <TextField
                          autoFocus
                          margin="dense"
						  id="name"
						  name="name"
                          label="Event Name"
						  type="text"
						  value={event.name}
						  onChange={this.handleInput}
                          fullWidth
                        />
						<TextField
                          margin="dense"
						  id="overview"
						  name="overview"
                          label="Event Overview"
						  type="text"
						  value={event.overview}
						  onChange={this.handleInput}
						  fullWidth
						  multiline
                        />
						<TextField
                          margin="dense"
						  id="description"
						  name="description"
                          label="Event Description"
						  type="text"
						  value={event.description}
						  onChange={this.handleInput}
						  fullWidth
						  multiline
                        />
						<TextField
                          margin="dense"
						  id="cost"
						  name="cost"
                          label="Event Cost"
						  type="text"
						  value={event.cost}
						  onChange={this.handleInput}
						  fullWidth
						  multiline
                        />
						<TextField
                          margin="dense"
						  id="location"
						  name="location"
                          label="Event Location"
						  type="text"
						  value={event.location}
						  onChange={this.handleInput}
						  fullWidth
						  multiline
                        />
						<TextField
                          margin="dense"
						  id="startDate"
						  name="startDate"
                          label="Event Start Date"
						  type="date"
						  value={event.startDateTime}
						  onChange={this.handleDateTime}
                        />
						<TextField
                          margin="dense"
						  id="startTime"
						  name="startTime"
                          label="Event Start Time"
						  type="time"
						  value={event.startDateTime}
						  onChange={this.handleDateTime}
                        />
						<TextField
                          margin="dense"
						  id="endDate"
						  name="endDate"
                          label="Event End Date"
						  type="date"
						  value={event.endDateTime}
						  onChange={this.handleDateTime}
                        />
						<TextField
                          margin="dense"
						  id="endTime"
						  name="endTime"
                          label="Event End Time"
						  type="time"
						  value={event.endDateTime}
						  onChange={this.handleDateTime}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                          Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                          {isEdit ? "Update" : "Create"}
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

// EventFormDialog.propTypes = {
// 	event: PropTypes.shape({
// 		name: PropTypes.string,

// 	})
// }