'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  qty: Number,
  prc: Number,
});

module.exports = mongoose.model('Orders', OrderSchema);
