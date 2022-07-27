const userManager = require("../managers/userManager");

async function postUser(req, res) {
  const { body } = req;
  const user = await userManager.createUser(body.username, body.password);
  user.save();
  res.status(201).json({ user: user }).end();
}

module.exports = postUser;
