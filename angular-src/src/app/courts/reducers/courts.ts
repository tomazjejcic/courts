import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as court from '../actions/court';
import * as collection from '../actions/court-collection';
import { CourtEvent } from '../models/courts'

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

            return {
                ...adapter.addMany(action.payload, state),
                selectedCourtId: state.selectedCourtId,
            }
        }

        case court.ADD_EVENT_COMPLETE: {

            const payloadIndex = action.payload[0].db_court_id;

            if (state.ids.indexOf(payloadIndex) > -1) {

                // add new event to court
                state.entities[payloadIndex].court_events.push(action.payload[0]);

                // sort events
                state.entities[payloadIndex].court_events.sort((a: CourtEvent, b: CourtEvent) => {

                    const c = +new Date(b.data.event_time);
                    const d = +new Date(a.data.event_time);

                    return d - c
                });

            } else {
                return state
            }

            return state
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
