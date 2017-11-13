// import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Court, CourtEvent } from '../models/courts'
import * as court from '../actions/court';
import * as collection from '../actions/collection-courts';

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

        case collection.LOAD_SUCCESS: {
            console.log('Court Reducer Collection Success: ', action);

            return {
                ...adapter.addMany(action.payload, state),
                selectedCourtId: state.selectedCourtId,
            }
        }

        case court.ADD_EVENT_SUCCESS: {

            const payloadIndex = action.payload[0].db_court_id;
            const newState = Object.assign({}, state);

            if (newState.ids.indexOf(payloadIndex) > -1) {

                // add new event to court
                newState.entities[payloadIndex].court_events.push(action.payload[0]);

                // sort events
                newState.entities[payloadIndex].court_events.sort((a: CourtEvent, b: CourtEvent) => {

                    const c = +new Date(b.data.event_time);
                    const d = +new Date(a.data.event_time);

                    return d - c
                });

                return newState

            } else {
                return newState
            }

        }

        default:
            return state;
    }
};

export const getSelectedId = (state: State) => state.selectedCourtId;
