const db = require("../database/models");

module.exports = {
  findAll: function (req, res) {
    db.Workout.find(req.query)
      .populate("data")
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Workout.findById(req.params.id)
      .populate("data")
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Workout.create(req.body)
      .then((dbModel) => {
        return db.User.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { workout: dbModel._id } },
          { new: true }
        )
          .then(function (dbUser) {
            res.json(dbUser);
          })
          .catch((err) => res.status(422).json(err));
      })
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Workout.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Workout.findById({ _id: req.params.id })
      .then((dbModel) => {
        dbModel.remove();
        return db.Data.remove({ _id: { $in: dbModel.data } });
      })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
/*

      "data": [
        "5ebc95bc18fb423a240f9b0c",
        "5ebdeb8d01246b15bce96e6a",
        "5ebdeba001246b15bce96e6b",
        "5ec06ae3278c95171c00ba88"
    ],

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
*/
