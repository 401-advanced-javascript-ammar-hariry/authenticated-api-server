'use strict';

const mongoose = require('mongoose');

const user = mongoose.Schema({
  user_name: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['Regular_users', 'Writers', 'Editors', 'Administrators'] },
});


module.exports = mongoose.model('user', user);