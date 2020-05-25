const db = require('../database/models');

module.exports = {
  findAll: function (req, res) {
    if (req.query.search) {
      console.log(req.query.search);
      db.Post.find({ $text: { $search: req.query.search } })
        .limit(30)
        .populate('comments')
        .sort({ createdAt: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    } else {
      db.Post.find(req.query)
        .limit(30)
        .populate('comments')
        .sort({ createdAt: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  },
  findById: function (req, res) {
    db.Post.findById(req.params.id)
      .populate('comments')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Post.create(req.body)
      .then(function (dbPost) {
        return db.User.findByIdAndUpdate(
          { _id: req.params.id },
          { $push: { posts: dbPost._id } },
          { new: true }
        );
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Post.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Post.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
