const db = require("../database/models");

module.exports = {
  findAll: function (req, res) {
    db.Data.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Data.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Data.create(req.body)
      .then((dbModel) => {
        return db.Workout.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { data: dbModel._id } },
          { new: true }
        )
          .then(function (dbWorkout) {
            res.json(dbWorkout);
          })
          .catch((err) => res.status(422).json(err));
      })
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Data.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Data.findById({ _id: req.params.id })
      .then((dbModel) => {
        dbModel.remove();
        return db.Workout.findOneAndUpdate(
          { data: req.params.id },
          { $pull: { data: req.params.id } }
        ).then(function (dbWorkout) {
          res.json(dbWorkout);
        });
      })
      .catch((err) => res.status(422).json(err));
  },
};
