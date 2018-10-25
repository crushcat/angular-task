import { AUTH_ACTIONS } from './constants';
import { Actions } from './actions';

const defaultState = {
    token: '',
    error: '',
};

export function AuthReducer(state = defaultState, action: Actions): any {
    switch (action.type) {
        case AUTH_ACTIONS.LOGIN:
            return {
                ...state,
                token: action.payload.token,
            };
        case AUTH_ACTIONS.LOGIN_FAILED:
            return {
                ...state,
                error: action.payload.error,
            };
        case AUTH_ACTIONS.FINAL:
            return {
                ...state,
                token: '',
            }
        default:
            return state;
    }
}