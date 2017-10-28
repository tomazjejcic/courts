import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

import { Store } from '@ngrx/store';
import * as courts from '../../actions/courts';

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

        this._store.dispatch(new courts.AddEvent(eventObject));
    }
}
