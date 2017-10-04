const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Courts Schema
const courtsSchema = mongoose.Schema({
    court_id: {
        type: String
    },
    court_name: {
        type: String
    },
    address: {
        city: {
            type: String
        },
        district: {
            type: Array
        },
        street: {
            type: String
        },
        note: {
            type: String
        },
        coord: {
            type: Array
        }       
    },
    data: {
        description: {
            type: String,
        },
        photo: {
            type: String,
        },
        rating: {
            type: String,
        },
        condition: {
            type: String,
        },
        popularity: {
            type: String,
        },
        access: {
            type: String,
        },
        outdoor: {
            type: String,
        },
        indoor: {
            type: String,
        },
        hoops_num: {
            total: {
                type: Number,
            },
            individual: {
                type: Number,
            },
            shared: {
                type: Number,
            }
        }
    },
    events: {
        type: Array
    }
})

const Courts = module.exports = mongoose.model('Courts', courtsSchema);

// Find all Courts in database
module.exports.findCourts = function(callback) {

    Courts.find({}, callback); // {} query selector
}

// Add Event on selected court
module.exports.addEvent = function(eventObject, callback) {

    Courts.update(

        // {_id: "59d3473f9334cced6411040arrrrr"}, // error test
        {_id: eventObject._id},
        {
            $push: {
                events: {
                    date: eventObject.date,
                    hour: eventObject.hour,
                }
            }
        },
        callback
    )
}
