const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number },
  phone: { type: String },
  gender: { type: String },
  photo: { type: String }, // Stores the filename of the uploaded photo
});

module.exports = mongoose.model('User', userSchema);
