const express = require('express');
const mongoose= require('mongoose');
const config=require('./config/dev');
const Rental=require('./models/rental');
const FakeDB=require('./models/fake-db');
const rentalRoutes= require('./routes/rental');
mongoose.connect(config.DB_URL).then(()=>{
    const fakeDB= new FakeDB();
    fakeDB.seedDB();
});
const app = express();

app.use('/app/v1/rentals', rentalRoutes);
const PORT=process.env.PORT||3001;
app.listen(PORT, function(){
    console.log("i am running");
});