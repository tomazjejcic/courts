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
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent implements OnInit {

    public storeData;

    constructor(

        private store: Store<any>,
    ) {

        this.storeData = this.store.select('courts').map(data => data.courts.entities);
    }

    createNewEvent(eventObject) {

        this.store.dispatch(new courtevents.AddEvent(eventObject));
    }

    ngOnInit() {

    }

}
