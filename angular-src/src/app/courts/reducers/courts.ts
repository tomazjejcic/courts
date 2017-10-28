import * as courtsAction from '../actions/courts';

export const courts = (state = {}, action) => {

    switch (action.type) {
        case courtsAction.SET_INITIAL_STATE:
            return Object.assign({}, state, {data: action.payload});

        case courtsAction.EVENT_COMPLETE:
            // return console.log('event IS COMPLETE', action.payload);

            state['data'].map(court => {
                if (court._id === action.payload[0].db_court_id) {

                    const updatedEvents = court.court_events.push(action.payload[0]);

                    return Object.assign({},
                        {
                            address: court.adress,
                            court_id: court.court_id,
                            court_name: court.court_name,
                            data: court.data,
                            court_events: updatedEvents,
                            _id: court._id
                        }
                    );
                } else {
                    return state;
                }
            });

            return state;

        default:
            return state;
    }
};
