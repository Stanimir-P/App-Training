import { Ticket } from './TicketComponent';
import { Container } from "@mui/material";
import { style } from "typestyle";

const classNames = {

    tickets: style({
        height: '100vh',
        padding: '100px 50px',
    }),
   
}

export const Tickets: React.FunctionComponent = () => {
    return (
        <Container className={classNames.tickets}>
            <Ticket />  
        </Container >
    );
}