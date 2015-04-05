var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  // name: { type: String, required: true, unique: true },
  // hash: { type: String },
  // salt: { type: String },
  email: {
    type: String,
    unique: true
  },
  groups: [{
    name: {
      type: String,
      required: true
    },
    _id: {
      type: Schema.Types.ObjectId,
      ref: 'groups'
    },
    level: {
      type: Number,
      default: 0
    }
  }],
  fechaIngreso: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('user', UserSchema);
