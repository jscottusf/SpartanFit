const db = require('../database/models');

module.exports = {
  findAll: function (req, res) {
    db.Workout.find(req.query)
      .populate('data')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Workout.findById(req.params.id)
      .populate('data')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Workout.create(req.body)
      .then(dbModel => {
        return db.User.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { workout: dbModel._id } },
          { new: true }
        )
          .then(function (dbUser) {
            res.json(dbUser);
          })
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Workout.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Workout.findById({ _id: req.params.id })
      .then(dbModel => {
        dbModel.remove();
        return db.Data.remove({ _id: { $in: dbModel.data } });
      })
      .then(dbModel => {
        return db.User.findOneAndUpdate(
          { workout: req.params.id },
          { $pull: { workout: req.params.id } }
        );
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
