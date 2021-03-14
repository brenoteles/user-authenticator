const express = require('express');

//Controllers
const UserController = require('./controllers/UserController');

//Router
const routes = express.Router();

//Routes

//User routes
routes.post('/create_user', UserController.signup); //SIGN UP
routes.post('/login_user', UserController.signin); //SIGN IN


module.exports = routes;
