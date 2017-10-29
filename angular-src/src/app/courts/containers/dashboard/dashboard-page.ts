import { Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

import { Store } from '@ngrx/store';
import * as courts from '../../actions/courts';
import * as fromCourts from '../../reducers';
import { Observable } from 'rxjs/Observable';
import { Court } from '../../models/courts';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard-page.html',
    styleUrls: ['./dashboard-page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent implements OnInit {

    // public storeData;

    // courts$: Observable<fromCourts.CourtsState>;
    courts$: Observable<Court[]>;

    constructor(

        // private dashboardService: DashboardService,
        // private _store: Store<any>
        private store: Store<fromCourts.State>
    ) {

        // this.courts$ = store.select(fromCourts.getCourtsState) // prva prova
        this.courts$ = store.select(fromCourts.getCourtsUp) // TRENUTNA

        // ** map here thus you don't need ' async)?.data" ' in html
        // this.storeData = this._store.select('courts').map(co => co.data);
    }

    createNewEvent(eventObject) {

        this.store.dispatch(new courts.AddEvent(eventObject));
    }

    ngOnInit() {
        // this.courts$.subscribe(data => console.log('Dashboard-PAGE DATA: ', data));
        this.store.dispatch(new courts.Load());
    }

    giveMeState() {
        console.log ('PUSHED');
        this.store.dispatch(new courts.ShowState('ll'));
    }
}
