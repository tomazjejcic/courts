import {
    ActionReducerMap,
} from '@ngrx/store';

import * as fromCourts from '../courts/reducers/courts';

export interface State {
    courtsReducer: fromCourts.State
}

export const reducers: ActionReducerMap<State> = {
    courtsReducer: fromCourts.reducer
}
