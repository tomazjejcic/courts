import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as court from '../actions/court';

import { Court } from '../models/courts';

export interface State extends EntityState<Court> {
    selectedCourtId: string | null;
}

export const adapter: EntityAdapter<Court> = createEntityAdapter<Court>({
    selectId: (court: Court) => court.id,
    // sortComparer: false,
})

export const initialState: State = adapter.getInitialState({
    selectedCourtId:  null
})

export function reducer(
    state = initialState,
    action: court.Actions
): State {

    switch (action.type) {

        case court.LOAD_SUCCESS:
            console.log('Reducer Load Successssss: ', action);

            return Object.assign({}, state, {entities: action.payload});

            // return {
            // ...adapter.addMany(action.payload, state),
            // selectedCourtId: state.selectedCourtId,
            // }

        case court.SHOW_STATE:
             console.log('STATE in SHOW STATE REDUCER: ', state);
             return state;

        case court.LOAD:
            return {
                ...state
            }

        default:
            return state;
    }
};

export const getIds = (state: State) => state.ids;
