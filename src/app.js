const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
require("dotenv/config")

const app = express();

app.use(cors());
app.use(bodyParser.json())
// app.use('/customers', () => {
//     console.log('In get method');
// });

const userRoute = require('./routes/user');

app.use('/user', userRoute);

const customerRoute = require('./routes/customer');

app.use('/customers', customerRoute);


app.get('/', (req, res) => {
    res.send("Please provide correcct resource url to access the onboarding service e.g /customers");
});

//mongoose.connect(process.env.DB_MB_CONN || process.env.DB_CONNECTION,
  //  { useNewUrlParser: true ,useUnifiedTopology: true  },() =>{
    //console.log("DB Connected - Local")    
//})

const port=process.env.PORT || 3000

app.listen(port);