const userManager = require("../managers/userManager");

async function getAllUsers(req, res) {
  const allUsers = await userManager.findAll();
  res.status(200).json(allUsers).end();
}

module.exports = getAllUsers;
