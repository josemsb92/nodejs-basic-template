const userManager = require("../managers/userManager");
const bcrypt = require("bcrypt");
async function login(req, res) {
  const { body } = req;
  const { username, password } = body;

  try {
    const user = await userManager.findByUsername(username);
    const verification =
      user === null ? false : await bcrypt.compare(password, user.password);
    console.log(user);
    if (!verification) {
      res.status(401).json({ error: "Invalid password or username" });
    }
    res.status(200).json(`You are logged in as ${username}`);
  } catch (error) {
    console.log(error);
  }
}
module.exports = login;
