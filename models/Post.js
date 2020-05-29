const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    cityName : {
        type : String,
        required : true
    },
    affected : {
        type : Number,
        required : true
    },
    recovery : {
        type : Number,
        required : true
    }, 
    death : {
        type : Number,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }

})

module.exports = mongoose.model('Posts', PostSchema);