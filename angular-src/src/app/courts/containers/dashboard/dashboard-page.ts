import { Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Store } from '@ngrx/store';

import * as courts from '../../actions/court';
import * as courtevents from '../../actions/courtevents';
import * as fromCourts from '../../reducers';
import { Observable } from 'rxjs/Observable';
import { Court } from '../../models/courts';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard-page.html',
    styleUrls: ['./dashboard-page.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
})
export class DashboardPageComponent implements OnInit {

    courts$: Observable<Court[]>

    constructor(

        private store: Store<fromCourts.State>,
    ) {

        this.courts$ = store.select(fromCourts.getCourtsCollection)
    }

    createNewEvent(eventObject) {

        this.store.dispatch(new courtevents.AddEvent(eventObject));
    }

    ngOnInit() {
        // this.courts$.subscribe(d => console.log('Dash Page Collection: ', d));
    }

}
