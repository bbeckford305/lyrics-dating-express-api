const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
  songName: {
    type: Number,
    required: true
  },
  songArtist: {
    type: String,
    required: true
  },
  songType: {
    type: String,
    required: true
  },
  token: String
}, {
  timestamps: true,
  toObject: {
    // remove `hashedPassword` field when we call `.toObject`
    transform: (_doc, user) => {
    }
  }
})

module.exports = mongoose.model('Song', songSchema)
