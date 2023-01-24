import { Action } from '@ngrx/store'; 

export enum UsernameActionsType {
    GET_USERNAME = 'GET USERNAME',
    UPDATE_USERNAME = 'Update Username'
}

export class GetUsername implements Action {
    readonly type = UsernameActionsType.GET_USERNAME; 
}

export class UpdateUsername implements Action {
    readonly type = UsernameActionsType.UPDATE_USERNAME; 
    constructor(public payload: string) { }  
}

export type UsernameActions = GetUsername |  UpdateUsername;  