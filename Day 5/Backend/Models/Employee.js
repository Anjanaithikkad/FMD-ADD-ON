const mongoose = require('mongoose')


var schema = mongoose.Schema(
    {
        Name: String,
        Age: Number,
        Department: String,
        Salary:Number
    }
)

//model
var EmployeModel = mongoose.model("Employee", schema)
module.exports=EmployeModel