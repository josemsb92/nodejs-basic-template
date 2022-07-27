const mongoose = require("mongoose");

const connectionString = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.comgd.mongodb.net/pruebaDB?retryWrites=true&w=majority`;
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

process.on("uncaughtException", (error) => {
  console.log(error);
  mongoose.disconnect();
});
module.exports = mongoose;
