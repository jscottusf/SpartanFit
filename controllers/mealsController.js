const db = require("../database/models");

module.exports = {
  findAll: function (req, res) {
    db.Meal.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Meal.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Meal.create(req.body)
      .then((dbModel) => {
        return db.User.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { meal: dbModel._id } },
          { new: true }
        )
          .then(function (dbUser) {
            res.json(dbModel);
          })
          .catch((err) => res.status(422).json(err));
      })
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Meal.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.Meal.findById({ _id: req.params.id })
      .then((dbModel) => {
        dbModel.remove();
        return db.User.findOneAndUpdate(
          { meal: req.params.id },
          { $pull: { meal: req.params.id } }
        ).then(function (dbUser) {
          res.json(dbUser);
        });
      })
      .catch((err) => res.status(422).json(err));
  },
};
