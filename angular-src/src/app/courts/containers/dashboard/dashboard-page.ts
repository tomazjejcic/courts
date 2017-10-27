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

        // ** map here thus you don't need ' async)?.data" ' in html
        this.storeData = this._store.select('courts').map(co => co.data);
    }

    createNewEvent(eventObject) {
        // all this goes to effects
        // this._store.dispatch({type: ADD_COURT_EVENT, payload: eventObject}); // thomas

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
