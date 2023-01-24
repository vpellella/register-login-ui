import { UsernameActions, UsernameActionsType } from "./username.action";

export const initialState = 'Hello User';

export function UsernameActionsReducer(state = initialState, actions: UsernameActions ) {

    switch(actions.type) {
        
        case UsernameActionsType.GET_USERNAME: {
            return state;
        }

        case UsernameActionsType.UPDATE_USERNAME: {
            state = actions.payload
            return state;
        }
    }
}