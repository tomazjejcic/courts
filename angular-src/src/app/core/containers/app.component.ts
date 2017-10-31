import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { DashboardService } from '../../courts/services/dashboard.service';
// import { SET_INITIAL_STATE } from '../../courts/actions/courts';

import * as courts from '../../courts/actions/court';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(

        private _dashboardService: DashboardService,
        private _store: Store<any>
    ) {

    }

    ngOnInit() {

        this.initStores();
    }

    initStores() {

        // this._dashboardService.getCourtsWithEvents().subscribe( data => {
        //     console.log('DATABASE SUCCESS: ', data);
            // this._store.dispatch({type: SET_INITIAL_STATE, payload: data});
            // this._store.dispatch(new courts.SetInitialState(data));
        this._store.dispatch(new courts.LoadCourts())

    }
        // err => {
        //     console.log(err);
        //     return false;
        // })

    // }

}
