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

module.exports.findCourts = function(callback) {

    Courts.find({}, callback); // {} query selector
}

module.exports.addEvent = function(eventObject, callback) {
    // console.log('WE ARE IN COURTS SCHEMA 22', eventObject);
    // console.log('WE ARE IN COURTS SCHEMA 33', callback);

    console.log('EVENt OBJECT in courts: ', eventObject);

    Courts.update(
        // {_id: "59d3473f9334cced6411040a"},
        {_id: eventObject._id},
        // {_id: "59d3473f9334cced6411040arrrrr"}, // error test
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
