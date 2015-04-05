var UserModel = require('../models/User');

module.exports = {
  index: function(req, res) {
    UserModel.find({}).exec(function(err, items) {
      if (!err) {
        res.set({'content-Type':'application/json'});
        res.status(200);
        res.json({ err: false, users: items });
      } else {
        res.json({ err: err });
      }
    });
  },

  new: function(req, res) {
    console.log(req.query);

    var user =  new UserModel({
      username: req.query.username,
      email: req.query.email
    });

    user.save(function(err, item) {
      if (err) {
        res.json({ err: err });
      } else {
        res.json({ user: item });
      }
    });
  },

  delete: function(req, res) {
    UserModel.remove({ _id: req.query._id }, function(err) {
      if (!err) {
        res.json({ err: false });
      } else {
        res.json({ err: err });
      }
    });
  },
  update: function(req, res) {
    var user =  new UserModel({
      username: req.query.username,
      email: req.query.email
    });

    var upsertData = user.toObject();

    delete upsertData._id;

    UserModel.update({ _id: req.query._id }, upsertData, { upsert: true }, function(err, item) {
      if (!err) {
        res.json({ err: false, user: item });
      } else {
        res.json({ err: err });
      }
    });
  },
  search: function(req, res) {
    UserModel.find({ username: new RegExp(req.params.data, 'i') }, function(err, users) {
      if (!err) {
        res.json({ err: false, users: users });
      } else {
        res.json({ err: err });
      }
    });
  },

  show: function(req, res) {
    UserModel.findOne({ _id: req.body.id }).exec(function(err, item) {
      if (!err) {
        res.json({ result: err, user: item});
      } else {
        res.json({ err: err });
      }
    });
  }
};
