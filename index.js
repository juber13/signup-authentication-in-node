const express = require('express');
const mongoose = require('mongoose');
const PORT = 5000;

const app = express();
const router = require('./routes/userroutes');

// sending response to the home page
app.use(express.json());

app.use("/api" , router);



// connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/users').then(() => console.log("connected succesfully"));
// running the server at port 5000
app.listen(PORT , () => {
    console.log(`server is running PROT ${PORT}`)
});