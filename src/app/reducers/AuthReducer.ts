import { Reducer } from 'redux';
import { BasicActions, BasicActionTypes } from '../actions/BasicActions';

export interface AuthState {
    authError: any,
}

const initialAuthState: AuthState = {
    authError: null,
};

export const AuthReducer: Reducer<AuthState, BasicActions> = (
    state = initialAuthState,
    action
) => {

    switch (action.type) {
        case BasicActionTypes.BASIC: {
            console.log('err')
            return {
                ...state,
                authError: 'Login Fail'
            };
        }
        case BasicActionTypes.BASIC: {
            console.log('success')
            return {
                ...state,
                authError: null,
            };
        }
        
        default:
            return state;
    }
};