const userManager = require("../managers/userManager");
const bcrypt = require("bcrypt");
async function postUser(req, res) {
  const { body } = req;
  const saltRounds = 10;
  const password = await bcrypt.hash(body.password, saltRounds);
  const user = await userManager.createUser(body.username, password);
  try {
    user.save();
  } catch (error) {
    console.log(error);
  }
  res.status(201).json({ user: user }).end();
}

module.exports = postUser;
