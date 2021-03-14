const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

//Importing models
const User = require('../models/User');


//Connection with DB
const connection = new Sequelize(dbConfig);

//Starting the models
User.init(connection);
