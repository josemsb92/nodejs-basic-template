const userManager = require("../managers/userManager");

async function getUser(req, res) {
  const { params } = req;  
  const user = await userManager.findUser(params.id);
  res.status(200).json(user).end();
}

module.exports = getUser;
