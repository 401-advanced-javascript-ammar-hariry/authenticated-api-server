'use strict';

module.exports = (req, res, next) => {
  let model = req.params.model;
  console.log('this is the rout param', model);

  switch (model) {
  case 'products':
    req.model = require(`../models/${model}/${model}-model`);
    next();
    return;
  case 'category':
    req.model = require(`../models/${model}/${model}-model`);
    next();
    return;
  default:
    next('Invalid Model');
    return;
  }
};