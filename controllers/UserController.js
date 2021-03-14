const Sequelize = require('sequelize');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

const User = require('../models/User');
const config = require('../config/auth');

const TYPE = 0; //User type. 1 will give the administrative privileges to user and 0 won't.

module.exports = {
    async signup(req, res){ //Account Register
        const email = req.body.email;

        const checking_email = await User.findOne({ //Checking if the email is already registered
            where:{
                email,
            }
        });


        if( checking_email !== "") { return res.status(400).json("This email is already registered.")};

        const password = await bcrypt.hashSync(req.body.password, 10); //Making the password stronger

        const user = JSON.parse( //This is necessary to edit object
            JSON.stringify(
                await User.create({
                    email,
                    password,
                    type: TYPE
              })
        ));
        delete user.password; //Removing hashed password

        const token = await jwt.sign({ id: user.id }, config.secret, { //Auth Token
            expiresIn: 86400 // 24 hours
        });

        user.token = token; //Adding the Auth Token to object

        return res.json(user); //Returning user
    },
    async signin(req, res){ //Account Login
        const email = req.body.email;

        const user = await User.findOne({ //Checking if the email is already registered
            where:{
                email,
            }
        });

        if( user === "") { return res.status(400).json("Wrong email.")};

        const password = await bcrypt.hashSync(req.body.password, 10);

        const auth = await bcrypt.compareSync(
            senha,
            user.password,
        );

        if(!auth){ return res.status(400).json("Wrong password.") };

        const User = JSON.parse( //This is necessary to edit object
            JSON.stringify(
                await User.create({
                    email,
                    password,
                    type: TYPE
              })
        ));
        delete User.password; //Removing hashed password

        const token = await jwt.sign({ id: User.id }, config.secret, { //Auth Token
            expiresIn: 86400 // 24 hours
        });

        User.token = token; //Adding the Auth Token to object

        return res.json(User); //Returning User

    }

};
