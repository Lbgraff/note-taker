const app = require('express').Router();
const htmlRoutes = require('./htmlroutes');
const apiRoutes = require('./apiroutes');

app.use("/api",apiRoutes)
app.use("/", htmlRoutes)

module.exports = app