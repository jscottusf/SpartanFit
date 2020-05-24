const db = require('../database/models');

module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User.findById(req.params.id)
      .populate('image')
      .populate('likes')
      .populate({
        path: 'posts',
        options: { sort: '-createdAt' },
        populate: { path: 'comments' },
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUserbySlug: function (req, res) {
    db.User.find({ slug: req.params.slug })
      .populate('image')
      .populate({
        path: 'posts',
        options: { sort: '-createdAt' },
        populate: { path: 'comments' },
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUserMeals: function (req, res) {
    db.User.findById(req.params.id)
      .populate('meal')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUserWorkouts: function (req, res) {
    db.User.findById(req.params.id)
      .populate({
        path: 'workout',
        options: { sort: 'date' },
        populate: { path: 'data', options: { sort: '-date' } },
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
