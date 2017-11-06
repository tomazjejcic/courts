import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import * as courts from '../actions/courtevents';
import * as courtactions from '../actions/court';
import * as courtcollections from '../actions/court-collection';
import { Court } from '../models/courts';
import { CourtEvent } from '../models/courts';
import { empty } from 'rxjs/observable/empty';
import { DashboardService } from '../services/dashboard.service';

@Injectable()
export class CourtsEffects {
    // @Effect()
    // addEvent$: Observable<Action> = this.actions$
    //     .ofType<courts.AddEvent>(courts.ADD_EVENT)
    //     .map(action => action.payload)
    //     .switchMap(query => {
    //         if (query === '') {
    //             return empty();
    //         } else {
    //             return this.dashboardService
    //                 .createNewEvent(query)
    //                 .map((courtEvent: CourtEvent[]) => new courts.EventComplete(courtEvent));
    //         }
    //     });

    @Effect()
    loadCourts$: Observable<Actions> = this.actions$
        .ofType<courtactions.LoadCourts>(courtactions.LOAD_COURTS)
        .switchMap(query => {
            if (!query) {
                console.log('ERR: no querry present')
                return empty()
            } else {
                // console.log('loadCourts QUERY', query)
                return this.dashboardService
                    .getCourtsWithEvents()
                    // .map((courts: Court[]) => new courtactions.LoadSuccess(courts));
                    .map((courts: Court[]) => new courtcollections.LoadCollectionSuccess(courts));
            }
        })

    constructor(
        private actions$: Actions,
        private dashboardService: DashboardService
    ) {}
}
