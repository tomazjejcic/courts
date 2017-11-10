import * as collection from '../actions/collection-courts';

export interface State {
    loaded: boolean;
    loading: boolean;
    ids: string[];
}

const initialState: State = {
    loaded: false,
    loading: false,
    ids: [],
};

export function reducer (
    state = initialState,
    action: collection.Actions
): State {
    switch (action.type) {

        case collection.LOAD_SUCCESS: {
            return {
                loaded: true,
                loading: false,
                ids: action.payload.map(court => court._id)
            }
        }

        default: {
            return state;
        }
    }
};

export const getIds = (state: State) => state.ids;
