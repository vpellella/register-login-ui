import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { GetUsername, UpdateUsername, UsernameActionsType } from './username.action';
import { UsernameActionsReducer } from './username.reducer';
import { AuthService } from 'src/app/shared/service/auth/auth.service';


@Injectable()
export class UsernameEffects {

    constructor(private actions$: Actions, private authService: AuthService){}

    @Effect()
    getUsers$: Observable<Action> = this.actions$.pipe(
        ofType(UsernameActionsType.GET_USERNAME),
                map(() => {return new GetUsername()}));
                
 
    @Effect()
    postUser$: Observable<Action> = this.actions$.pipe(
        ofType(UsernameActionsType.UPDATE_USERNAME),
        map((action: UpdateUsername) => action.payload),
        map((username) => {
                return new UpdateUsername(username);
        })
        );
}