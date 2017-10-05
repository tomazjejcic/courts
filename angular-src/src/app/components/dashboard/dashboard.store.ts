import { Injectable } from '@angular/core';

import { DashboardService } from '../../services/dashboard.service';

import {
    ICourtState,
    DA_ACTIONS,
    IDashboardStoreActions,
    DEFAULT_COURT_STATE
 } from './index';

@Injectable()
export class DashboardStore {

    private _courtState: ICourtState;

    constructor (

        private _dashboardService: DashboardService,
    ) {

    }

    public getState() {
        return this._courtState;
    }

    public dispatch(action: IDashboardStoreActions) {

        switch (action.type) {
            case DA_ACTIONS.INITIALIZE:
                this._setInitialState();
                break;
            default:
                break;
        }
    }

    private _setInitialState() {
        this._courtState = Object.assign({}, DEFAULT_COURT_STATE);
        this._requestNewData();
    }

    private _requestNewData() {

        this._dashboardService.getCourts().subscribe( data => {
            console.log('THE DATA from dashboard service in STORE: ', data);
            // this.courts = data;
        },
        err => {
            console.log(err);
            return false;
        })
    }

}
