const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
// const CourtEvents = require('./court_events');

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
    }
})

const Courts = module.exports = mongoose.model('Courts', courtsSchema);

// Find all Courts in database
// module.exports.findCourts = function(callback) {
//     Courts.find({}, callback); // {} query selector
// }

module.exports.getCourtsWithEvents = function(callback) {

    // Populate Courts with Court Events
    Courts.aggregate([
         {
            $lookup:
              {
                from: "courtevents",
                localField: "court_id",
                foreignField: "court_id",
                as: "court_events"
              }
         },
         // need to unwind court_events so you can sort them
         {
             $unwind: {
                 path: '$court_events',
                 // preserve null, otherwise courts without events will be removed
                 preserveNullAndEmptyArrays: true
             }
         },
         {
             $sort: { "court_events.data.event_time": 1 }
         },
         // after unwind need to group/build the document back
         { 
             $group: {
                "_id": "$_id",
                "court_id" : { "$first" : "$court_id" },
                "court_name" : { "$first" : "$court_name" },
                "address": { "$first": "$address" },
                "data": { "$first": "$data" },
                "court_events": { "$push": "$court_events" }
            }
         },
         {
             $sort: { "court_id": 1 }
         },
//          { 
//             $project: {
//                 "_id": 1
//                 "court_id": 1,
//                 "court_name": 1,
//                 "data" : 1,
//                 "address": 1,
//                 "court_events": 1,
//              }
//          }
    ], callback)
}
