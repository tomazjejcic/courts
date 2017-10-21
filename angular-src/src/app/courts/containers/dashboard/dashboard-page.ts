import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

import { Store } from '@ngrx/store';
import { ADD_COURT_EVENT } from '../../actions/courts';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard-page.html',
    styleUrls: ['./dashboard-page.scss']
})
export class DashboardPageComponent {

    public storeData;

    constructor(

        private dashboardService: DashboardService,
        private _store: Store<any>
    ) {

        this.storeData = this._store.select('courts');
    }

    createNewEvent(eventObject) {

        this.dashboardService.createNewEvent((eventObject)).subscribe( data => {

            // this if check should be done better
            if (data[0].data.event_time) {
                this._store.dispatch({type: ADD_COURT_EVENT, payload: data[0]});
            } else {
                console.log('Failed to create event', data);
            }
        })
    }
}
