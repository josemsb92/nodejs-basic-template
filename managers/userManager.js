const Users = { Name: "Jose Miguel", Age: 30, Location: "Málaga" };
class userManager {
  static findAll() {
    return Users;
  }
}
module.exports = userManager;
