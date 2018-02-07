// import express from 'express'
const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./conroller.js');
// safe ports to use ---> 3000 - 12,000
const port = 3000;

const app = express();

// TOP LEVEL MIDDLEWARE
app.use(bodyParser.json());

// ENDPOINTS
// app.METHOD(PATH, HANDLER FUNCTION)
// METHOD = get, post, put, delete
// HANDLER FUNCTION = function(request, response, next){...}
// req = request / res = response
// You have to get a request before you can send a response

app.get('/api/getPeople', ctrl.getPeople);

app.get('/api/getPeople/:id', ctrl.getPeopleById);

app.post('/api/addNewPerson', ctrl.addPerson);



app.listen(port, () => console.log(`listening on port ${port}`));