const db = require('../database/models');

module.exports = {
  create: function (req, res) {
    console.log(req.body);
    db.Like.create(req.body)
      .then(function (dbLike) {
        return db.User.findByIdAndUpdate(
          { _id: req.params.id },
          { $push: { likes: dbLike._id } },
          { new: true }
        );
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Like.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
