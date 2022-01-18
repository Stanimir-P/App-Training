import { style } from "typestyle";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem, Button } from '@mui/material';
import { messageService } from '../../app/services/MessageService';

const classNames = {
    ticket: style({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: '4px',
        boxShadow: '0 0 5em -1em black',
        margin: '50px 0px',
        padding: '10px',
    }),

    userInfoWrapper: style({
        display: 'flex',
        justifyContent: 'space-around'
    }),

    ticketInputs: style({
        display: 'flex',
        justifyContent: 'space-around'
    }),

}

export const Ticket: React.FunctionComponent<{ data: any }> = ({ data }) => {
    const isStatusOpen = () => {
        if (data.ticketStatus !== 'Open') {
            return false;
        } else {
            return true;
        }
    }

    
    const handleStatusChange = (event: SelectChangeEvent) => {
        let currStatus: string = event.target.value;
        messageService.updateTicket(data.ticketId, currStatus);
    }

    const handleClickDelete = () => {
        messageService.deleteTicket(data.ticketId);
    }

    return (
        <div className={classNames.ticket}>
            <h1>{data.messageType} </h1>

            <div className={classNames.userInfoWrapper}>
                <p>Name: {`${data.firstName} ${data.lastName}`}</p>
                <p>Email: {data.email}</p>
            </div>

            <div className="title">
                <h2>{data.title}</h2>
            </div>

            <div className="description">
                <p>{data.description}</p>
            </div>

            <div className={classNames.ticketInputs}>
                {isStatusOpen() ? (
                    <Select
                    value={data.ticketStatus}
                    onChange={handleStatusChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{
                        width: '100px'
                    }}
                >
                    <MenuItem value='Open'>
                        <em>Open</em>
                    </MenuItem>
                    <MenuItem value='Closed'>Closed</MenuItem>
                    <MenuItem value='Resolved'>Resolved</MenuItem>
                </Select>
                ) : (
                    <Select
                    value={data.ticketStatus}
                    onChange={handleStatusChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{
                        width: '140px'
                    }}
                    disabled
                >
                    <MenuItem value='Closed'>Closed</MenuItem>
                    <MenuItem value='Resolved'>Resolved</MenuItem>
                </Select>
                )}

                <Button onClick={handleClickDelete} variant="contained">
                    Remove Ticket
                </Button>
            </div>
        </div >
    );
}