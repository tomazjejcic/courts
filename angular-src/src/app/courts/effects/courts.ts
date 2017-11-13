import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { DashboardService } from '../services/dashboard.service';
import { Observable } from 'rxjs/Observable';
import { CourtEvent } from '../models/courts';
import { empty } from 'rxjs/observable/empty';
import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/catch';
// import { of } from 'rxjs/observable/of';
import * as courts from '../actions/court';

@Injectable()
export class CourtsEffects {

    @Effect()
    addEvent$: Observable<Action> = this.actions$
        .ofType<courts.AddEvent>(courts.ADD_EVENT)
        .map(action => action.payload)
        .switchMap(query => {
            if (!query.court_id) {
                // return empty();
                throw new Error('empty id')
            } else {
                return this.dashboardService
                    .createNewEvent(query)
            }
        })
        .map((courtEvent: CourtEvent[]) => new courts.AddEventSuccess(courtEvent));
        // .catch((e) => of(new courts.AddEventFail(e)));

    constructor(
        private actions$: Actions,
        private dashboardService: DashboardService
    ) {}
}
