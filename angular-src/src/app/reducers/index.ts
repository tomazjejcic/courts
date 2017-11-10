import {
    ActionReducerMap,
    MetaReducer,
} from '@ngrx/store';

import * as fromCourts from '../courts/reducers/courts';
// import * as fromCourtEvents from '../courts/reducers/courtevents';

export interface State {
    courts: fromCourts.State,
    // courtEventReducer: fromCourtEvents.State
}

export const reducers: ActionReducerMap<State> = {
    courts: fromCourts.reducer,
    // courtEventReducer: fromCourtEvents.reducer
}
