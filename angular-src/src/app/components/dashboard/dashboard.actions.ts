import { DashboardStore } from './index';

export type DA_ACTIONS = 'INITIALIZE';

export const DA_ACTIONS = {
    INITIALIZE: 'INITIALIZE' as DA_ACTIONS
}

export interface IDashboardStoreActions {
    type: DA_ACTIONS,
    payload?: any
}

export class DashboardActions {

    private static _dashboardStore: DashboardStore;

    // INIT
    public static dashboardInit(dashboardStore: DashboardStore, params = {}) {

        this._dashboardStore = dashboardStore;

        this._dashboardStore.dispatch({
            type: DA_ACTIONS.INITIALIZE,
            payload: params
        })
    }

    // Utility
    public static getState() {

        return this._dashboardStore.getState();
    }
}
