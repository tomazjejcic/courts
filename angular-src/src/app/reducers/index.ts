import {
    ActionReducerMap,
    MetaReducer,
} from '@ngrx/store';

import * as fromCourts from '../courts/reducers/courts';
import * as fromCourtEvents from '../courts/reducers/courtevents';

export interface State {
    courtsReducer: fromCourts.State,
    courtEventReducer: fromCourtEvents.State
}

export const reducers: ActionReducerMap<State> = {
    courtsReducer: fromCourts.reducer,
    courtEventReducer: fromCourtEvents.reducer
}
