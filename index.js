const express = require('express');
const app = express();

const hackerRoutes = require('./routes/hackersRoutes');

const mongoose = require("mongoose");

const mongoDBConnectString = 'mongodb+srv://hackerDetails:hackerDetails@cluster0.qrbjy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// const mongoDBConnectString = 'mongodb://localhost:27017/';

const port = process.envv.PORT || 9000

mongoose.connect(mongoDBConnectString,{useUnifiedTopology:true,useFindAndModify:false, useNewUrlParser:true})
const connectMongoDb = mongoose.connection

connectMongoDb.on('open',()=>{
    console.log("DB connected....")
})

app.use(express.json()) 

app.use('/hackers',hackerRoutes)

app.listen(port,()=>{
    console.log("port connected...")
})