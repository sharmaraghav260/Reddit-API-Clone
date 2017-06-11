import db from './../models';

const userController = {};

userController.post = (req, res) => {
  //const { username, password } = req.body;
  console.log(req.body);
  //req = JSON.parse(req);

  // Validation

  const user = new db.User({
    username: req.body.username,
    password: req.body.password
  });

  user.save().then((newUser) => {
    res.status(200).json({
      success: true,
      data: newUser,
    });
  }).catch((err) => {
    res.status(500).json({
      message: err,
    });
  });
}

export default userController;
