const cors = require('cors');
const express = require('express');
const routes = require('./routes');

require('./database'); //Importing DB

const app = express();

app.use(express.json());
app.use(cors()); //Cross-origin resource sharing
app.use(routes); //Calling routes
app.listen(3333);
