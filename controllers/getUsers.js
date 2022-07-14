const userManager = require("../managers/userManager");

async function getAllUsers(req, res) {
  const users = await userManager.findAll();
  res.status(200).json(users).end();
}

module.exports = getAllUsers;
