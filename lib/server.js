'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const signin = require('../routs/signin');
const signup = require('../routs/signup');
const prtectedRouts = require('../routs/routs');

const handler_404 = require('../middleware/error404');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static('./public'));
app.use(signup);
app.use(signin);
app.use(prtectedRouts);


app.get('*', handler_404);


module.exports = {
  server: app,
  start: () => {
    const PORT = process.env.PORT || 3030;
    app.listen(PORT, () => { console.log(`listining on PORT ${PORT}`); });
  },
};