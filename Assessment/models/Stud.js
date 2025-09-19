const mongoose = require('mongoose')


var schema = mongoose.Schema(
    {
        Name: String,
        Age: Number,
        Course: String,
        Department: String
    }
)

//model
var StudModel = mongoose.model("Stud", schema)
module.exports = StudModel