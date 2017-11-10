import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DashboardService } from '../services/dashboard.service';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { Court } from '../models/courts';
import * as collection from '../actions/collection-courts';

@Injectable()
export class CollectionCourtsEffects {

    @Effect()
    loadCourts$: Observable<Actions> = this.actions$
        .ofType<collection.LoadCourts>(collection.LOAD_COURTS)
        .switchMap(query => {
            if (!query) {
                console.log('ERR: no querry present')
                return empty()
            } else {
                console.log('loadCourts QUERY', query)
                return this.dashboardService
                    .getCourtsWithEvents()
                    .map((courts: Court[]) => new collection.LoadSuccess(courts));
            }
        })

    constructor(
        private actions$: Actions,
        private dashboardService: DashboardService
    ) {}

}
