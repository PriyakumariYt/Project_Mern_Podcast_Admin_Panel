const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  imgSrc: { type: String, required: true },
  title: { type: String, required: true },
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;