import { Ticket } from './TicketComponent';
import { Container } from "@mui/material";
import { style } from "typestyle";
import { messageService } from '../services/MessageService';
import { auth } from "../../firebaseSetup";
import { useEffect, useState } from 'react';

const classNames = {

    tickets: style({
        minHeight: '100vh',
        padding: '100px 50px',
    }),

}

export const Tickets: React.FunctionComponent = () => {
    const [data, setData] = useState([]);
    const user = auth.currentUser;

    useEffect(() => {
        async function getDataFromDB() {
            if (user !== null) {
                let userData: any = await messageService.getUserData(user.uid);
                
                return setData(userData);
            }
        }

        getDataFromDB();
    }, [user, data]);

    return (
        <Container className={classNames.tickets}>
            {data.map((ticket: any) => {
                return <Ticket data={ticket} key={ticket.ticketId} />                
            })}
        </Container >
    );
}