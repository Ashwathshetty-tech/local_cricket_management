const mongoose=require('mongoose');

var Event=mongoose.model('Event',{
    eventName: { type: String },
    place: { type: String },
    organizer: { type: String },
    contact: { type: String },
    email: { type: String },
    entry: { type: String }, 
    winning: { type: String },
    poster:{type:String},
    startDate:{type:String},
    endDate: { type: String },
    approval: { type: String }
});

module.exports={ Event };