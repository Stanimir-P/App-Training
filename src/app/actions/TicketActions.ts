import { TicketActionTypes } from '../action-types/ticketActiontypes';

interface GetTicketData {
    type: TicketActionTypes.GET_TICKET_DATA;
    property: any;
}

interface AddTicketAction {
    type: TicketActionTypes.ADD_TICKET;
    property: any;
}

interface RemoveTicketAction {
    type: TicketActionTypes.REMOVE_TICKET;
    property: any;
}

interface UpdateTicketStateAction {
    type: TicketActionTypes.UPDATE_TICKET_STATE;
    property: any;
}

export type TicketAction = GetTicketData | AddTicketAction | RemoveTicketAction | UpdateTicketStateAction;

