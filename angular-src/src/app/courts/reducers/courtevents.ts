import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as eventActions from '../actions/courtevents';

import { CourtEvent } from '../models/courts';

export interface State extends EntityState<CourtEvent> {
    selectedEventId: string | null;
}

export const adapter: EntityAdapter<CourtEvent> = createEntityAdapter<CourtEvent>({
    selectId: (courtevent: CourtEvent) => courtevent.court_id,
    sortComparer: false,
})

export const initialState: State = adapter.getInitialState({
    selectedEventId: null,
});

export function reducer(
    state = initialState,
    action: eventActions.Actions
): State {

    switch (action.type) {

        case eventActions.EVENT_COMPLETE:
             console.log('event IS COMPLETE', action.payload);

            return state;

        default:
            return state;
    }
};
