import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action, ActionReducerMap, Store } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store'
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HideLoadingBar, LoadingActionsType, ShowLoadingBar } from './loading.actions';
import { loadingActionsReducer, LoadingStore } from './loading.reducer';
import { UsernameActions } from '../username/username.action';
import { UsernameActionsReducer } from '../username/username.reducer';




@Injectable()
export class LoadingEffects {

    constructor(private actions$: Actions){
    
    }

    @Effect()
    showLoadingBar$: Observable<Action> = this.actions$.pipe(
        ofType(LoadingActionsType.SHOW_LOADING_BAR),
                map(() => {return new ShowLoadingBar(true)}));
                
    @Effect()
    hideLoadingBar$: Observable<Action> = this.actions$.pipe(
        ofType(LoadingActionsType.SHOW_LOADING_BAR),
                map(() => {return new HideLoadingBar()}));
                            
}

export interface AppState {
    router?: RouterReducerState,
    loading?: LoadingStore,
    username?: string

}

export const appReducers: ActionReducerMap<AppState, any> = {
    router: routerReducer,
    loading: loadingActionsReducer,
    username: UsernameActionsReducer
    
}