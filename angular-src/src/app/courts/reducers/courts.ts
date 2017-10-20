import { SET_INITIAL_STATE, ADD_COURT_EVENT } from '../actions/courts';

export const courts = (state = {}, action) => {

    switch (action.type) {
        case SET_INITIAL_STATE:
            return Object.assign({}, state, {data: action.payload});

        case ADD_COURT_EVENT:

            state['data'].map(court => {
                if (court._id === action.payload._id) {

                    const updatedEvents = court.events.push({date: action.payload.date, hour: action.payload.hour});

                    return Object.assign({},
                        {
                            address: court.adress,
                            court_id: court.court_id,
                            court_name: court.court_name,
                            data: court.data,
                            events: updatedEvents,
                            _id: court._id
                        }
                    );

                } else {
                    return state;
                }
            })

            return state;

        default:
            return state;
    }
};
