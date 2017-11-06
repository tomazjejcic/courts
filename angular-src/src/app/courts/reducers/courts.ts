import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as court from '../actions/court';
import * as collection from '../actions/court-collection';

import { Court } from '../models/courts';

export interface State extends EntityState<Court> {
    selectedCourtId: string | null;
}

export const adapter: EntityAdapter<Court> = createEntityAdapter<Court>({
    selectId: (court: Court) => court._id,
    // sortComparer: false,
})

export const initialState: State = adapter.getInitialState({
    selectedCourtId:  null
})

export function reducer(
    state = initialState,
    action: court.Actions | collection.Actions
): State {

    switch (action.type) {

        case court.LOAD_SUCCESS:
        case collection.LOAD_COLLECTION_SUCCESS: {
            console.log('Court Reducer Success: ', action);

            // return Object.assign({}, state, {entities: action.payload});
            return {
                ...adapter.addMany(action.payload, state),
                selectedCourtId: state.selectedCourtId,
            }
        }

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

export const getSelectedId = (state: State) => state.selectedCourtId;
