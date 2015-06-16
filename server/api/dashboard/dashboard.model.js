'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DashboardSchema = new Schema({
  name: Number,
  latitude: Number,
  longitude: Number,
  apiNumber: Number,
  operator: String,
  status: String,
  rsvCat: String,
  latLength: Number,
  stages: Number,
  fpd: { type: Date, default: Date.now },
  oil: Number,
  gas: Number,
  water: Number
});

module.exports = mongoose.model('Dashboard', DashboardSchema);