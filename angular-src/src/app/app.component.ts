import { Component, OnInit } from '@angular/core';
import {
    DashboardStore,
    DashboardActions,
    ICourtState,
    DEFAULT_COURT_STATE
} from './components/dashboard/index';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    private _courtState: ICourtState = DEFAULT_COURT_STATE;

    constructor(

        private _dashboardStore: DashboardStore
    ) {

    }

    ngOnInit() {

        // Initialize Store
        this.initStores();

        // Initialize State
        this.initState();
    }

    initStores() {
        DashboardActions.dashboardInit(this._dashboardStore);
    }

    initState() {
        this._courtState = DashboardActions.getState();
    }
}
