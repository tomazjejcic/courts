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

        this.dashboardService.addEvent((eventObject)).subscribe( data => {
            // TODO: should refactor in a way that I receive the data I added
            if (data.ok && data.n && data.nModified) {

                this._store.dispatch({type: ADD_COURT_EVENT, payload: eventObject});
            } else {

                console.log('Failed to create event', data);
            }
        })
    }
}
