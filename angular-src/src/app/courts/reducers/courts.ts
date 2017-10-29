import { createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as court from '../actions/courts';
import { Court } from '../models/courts';

export interface State extends EntityState<Court> {
    data: {
        selectedCourtid: string | null;
        court_name: string;
        address: {
            city: string;
            district: Array<string>;
            street: string;
            note: string;
            coord: Array<string>;
        };
        data: {
            description: string;
            photo: string;
            rating: string;
            condition: string;
            popularity: string;
            access: string;
            outdoor: string;
            indoor: string;
            hoops_num: {
                total: number;
                individual: number;
                shared: number;
            }
        };
        events: Array<Object>;
    }
}

export const adapter: EntityAdapter<Court> = createEntityAdapter<Court>({
    selectId: (court: Court) => court.id,
    // sortComparer: false,
})

export const initialState: State = adapter.getInitialState({
    data: {
        selectedCourtid: null,
        court_name: 'asdf',
        address: {
            city: 'asdf',
            district: ['asdf', 'asdf'],
            street: 'asdf',
            note: 'asdf',
            coord: ['asdf', 'asdf'],
        },
        data: {
            description: 'asdf',
            photo: 'asdf',
            rating: 'asdf',
            condition: 'asdf',
            popularity: 'asdf',
            access: 'asdf',
            outdoor: 'asdf',
            indoor: 'asdf',
            hoops_num: {
                total: 44,
                individual: 4,
                shared: 7,
            }
        },
        events: [{a: 'asdf'}, {b: 'asdf'}],
    }
})

export function reducer(
    state = initialState,
    action: court.Actions
): State {

    switch (action.type) {
        case court.SET_INITIAL_STATE:
            console.log('Reducer Initial State: ', action);

            return Object.assign({}, state, {data: action.payload});

        case court.SHOW_STATE:
             console.log('STATE in SHOW STATE REDUCER: ', state);
             return state;

        case court.LOAD:
            return {
                ...state
            }

        case court.EVENT_COMPLETE:
             console.log('event IS COMPLETE', action.payload);

            // state['data'].map(court => {
            //     if (court._id === action.payload[0].db_court_id) {

            //         const updatedEvents = court.court_events.push(action.payload[0]);

            //         return Object.assign({},
            //             {
            //                 address: court.adress,
            //                 court_id: court.court_id,
            //                 court_name: court.court_name,
            //                 data: court.data,
            //                 court_events: updatedEvents,
            //                 _id: court._id
            //             }
            //         );
            //     } else {
            //         return state;
            //     }
            // });

            return state;

        default:
            return state;
    }
};

// export const getCourts = (state: State) => state.data;
export const getSelectedCourtsId = (state: State) => state.data;
