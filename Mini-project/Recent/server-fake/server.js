require('dotenv').config()

const express = require("express");
const user = require('./routes/user');
const mongoose = require('mongoose')

const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use(express.json())
app.use('/api/user', user)

app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})
//app.use(express.json());
//app.use(require("./routes/record"));
//const dbo = require("./db/conn");

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })