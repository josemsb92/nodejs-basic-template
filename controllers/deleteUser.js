const userManager = require("../managers/userManager");

async function deleteUser(req, res) {
  const { body } = req;
  await userManager.removeUser({ id: body.id });
  res.status(200).json("user has been deleted").end();
}

module.exports = deleteUser;
