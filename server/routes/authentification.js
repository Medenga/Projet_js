const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Creer un compte
router.post("/inscription", async (req, res) => {
  try {
    const token = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const inscription = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    const user = await inscription.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Se connecter
router.post("connexion", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json();
    const code = await bcrypt.compare(req.body.password, user.password);
    !code && res.status(400).json();
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
