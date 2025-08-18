const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  location: String,
  category: String,
  amount: String,
  description: String
});

module.exports = mongoose.model('Job', jobSchema);
