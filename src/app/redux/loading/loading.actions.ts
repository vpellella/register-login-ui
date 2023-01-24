import { Action, createAction } from '@ngrx/store';

export enum LoadingActionsType {
    SHOW_LOADING_BAR = "Show Loading Bar",
    HIDE_LOADING_BAR = "Hide Loading Bar"
}

export class ShowLoadingBar implements Action {
    readonly type: string = LoadingActionsType.SHOW_LOADING_BAR;
    constructor(public payload: boolean) { }  
}

export class HideLoadingBar implements Action {
    readonly type: string = LoadingActionsType.HIDE_LOADING_BAR;
    public payload = false;
}

export type LoadingActions = ShowLoadingBar |  HideLoadingBar;  
