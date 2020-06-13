'use strict';

const Model = require('../model');
const schema = require('./product-schema');

class Product extends Model {
  constructor() {
    super(schema);
  }
}

module.exports = new Product();