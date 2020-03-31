const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const rentalSchema=new Schema({
    title:{type : String, required : true },
    city :{type : String, required : true },
    street :{type : String, required : true },
    category :{type : String, required : true },
    image :{type : String, required : true },
    bedroom: Number,
    dailyrate: Number,
    shared:Boolean
});

module.exports=mongoose.model('Rental', rentalSchema)