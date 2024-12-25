const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    unique: true,
  },
});

module.exports = mongoose.model('Products', userSchema);
