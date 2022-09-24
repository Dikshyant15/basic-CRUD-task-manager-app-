const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide the details'],
        trim:true ,
        maxLength:[20,'cant be more than the 20']
    },
    completed:{
        type:Boolean,
        default:false
    },
}
)

module.exports = mongoose.model('Task',TaskSchema)

    