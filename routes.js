const express = require('express');

//Controllers
const UserController = require('./controllers/UserController');

//Router
const routes = express.Router();

//Routes

//User routes
routes.post('/create_user', UserController.signup);
routes.post('/login_user', UserController.signin);


module.exports = routes;