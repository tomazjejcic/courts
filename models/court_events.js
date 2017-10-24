const mongoose = require('mongoose');

// Court Events Schema
const courtEventsSchema = mongoose.Schema({
    court_id: {
        type: String
    },
    db_court_id: {
        type: String
    },
    user_creator: {
        id: {
            type: String
        },
        username: {
            type: String
        }
    },
    data: {
        time_created: {
            type: String
        },
        event_time: {
            type: Date
        }
    },
    players: {
        type: Array
    }
});

const CourtEvents = module.exports = mongoose.model('CourtEvents', courtEventsSchema);

// Find all Court Events
// module.exports.findCourtEvents = function(callback) {
//     CourtEvents.find({}, callback);
// }

// Add Event
module.exports.addCourtEvent = function(courtEventObject, callback) {

    // for some reason just 'insert' didn't work???
    CourtEvents.insertMany(
        [courtEventObject],
        callback
    )
}
