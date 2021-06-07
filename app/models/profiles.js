const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
  age: {
    type: Number,
    min: 18,
    required: true
  },
  height: {
    type: String,
    required: true
  },
  sexPref: {
    type: String,
    required: true
  },
  relationship: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  funFact: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }

}, {
  timestamps: true
})

module.exports = mongoose.model('Profile', profileSchema)
