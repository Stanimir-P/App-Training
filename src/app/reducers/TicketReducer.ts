import { Reducer } from 'redux';
import { TicketActionTypes } from '../action-types/ticketActiontypes';
import { TicketAction } from '../actions/TicketActions';

export interface TicketDataState {
    property: any;
}

const initialTicketDataState: TicketDataState = {
    property: null
};

export const TicketReducer: Reducer<TicketDataState, TicketAction> = (
    state = initialTicketDataState,
    action
) => {

    switch (action.type) {
        case TicketActionTypes.ADD_TICKET: {
            return {
                ...state,
                property: action.property
            };
        }

        case TicketActionTypes.REMOVE_TICKET: {
            return {
                ...state,
                property: action.property
            };
        }

        case TicketActionTypes.UPDATE_TICKET_STATE: {
            return {
                ...state,
                property: action.property
            };
        }

        default:
            return state;
    }
};