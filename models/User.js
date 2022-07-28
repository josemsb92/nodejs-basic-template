const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: String, // String is shorthand for {type: String}
  password: String,
  email: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
});
//El metodo transform nos permite transformar los datos que nos devuelve la petición, de esta manera podemos eliminar
//el _id que devuelve mongoose y guardamos el valor de _id en id, para que sea más fácil de leer
userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject.password;
    delete returnedObject._id;
  },
});

const User = model("User", userSchema);
module.exports = User;
