
import { LoadingActions, LoadingActionsType } from "./loading.actions";


export interface LoadingStore {
    showProgressBarStatus: boolean
}

export const loadingInitialState: LoadingStore = { showProgressBarStatus: false};

export function loadingActionsReducer (state = loadingInitialState, actions: LoadingActions) {
    switch(actions.type) {

        case LoadingActionsType.SHOW_LOADING_BAR: {
            console.log("start loading")
            var data = {...state, showProgressBarStatus: actions.payload};
            return data;
        }
        case LoadingActionsType.HIDE_LOADING_BAR: {
            var data = {...state, showProgressBarStatus: actions.payload};
            return data;
        }
        default:
            return state;
    }
}