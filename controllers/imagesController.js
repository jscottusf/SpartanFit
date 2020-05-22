const db = require('../database/models');

module.exports = {
  postImage: function (req, res) {
    console.log(req.file.location);
    db.Image.create({
      //this allows me to save it in public src while referencing it...req.file.path was no good
      profileImg: req.file.location,
    })
      .then(function (dbImage) {
        return db.User.findByIdAndUpdate(
          { _id: req.params.id },
          { image: dbImage._id },
          { new: true }
        );
      })
      .then(function (dbImage) {
        res.json(dbImage);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  findById: function (req, res) {
    db.Image.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
