const User = require("../models/User");
class userManager {
  static async findAll() {
    const all = await User.find({});
    /*  
    //Si queremos devolver solo el campo username de la tabla users, se puede usar select
    const all = await User.find({}).select("username");
    */
    return all;
  }
  static async findUser(id) {
    const user = await User.findById(id);
    return user;
  }
  static async createUser(username, password) {
    const newUser = await new User({ username: username, password: password });
    return newUser;
  }
  static async findByUsername(username) {
    const user = await User.findOne({ username: username });
    return user;
  }
  static async removeUser(id) {
    await User.deleteOne(id);
  }
}

module.exports = userManager;
