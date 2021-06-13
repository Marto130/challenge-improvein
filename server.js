const { NODE_ENV, app } = require("./index");
const mongoose = require("mongoose");

const server = async () => {
  const PORT = process.env.PORT || 7005;
  console.log(process.env.URL_ATLAS);

  try {
    const connectDB = await mongoose.connect(process.env.URL_ATLAS, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`Success connection to ${connectDB.connections[0].name} DB.`);

    app
      .listen(PORT, () => {
        console.log(
          `Runing in ${NODE_ENV.toUpperCase()} environment, port: ${PORT}.`
        );
      })
      .on("error", (error) => {
        console.log(error.message);
        console.log(`Listen method failed. Unable to listen on port ${PORT}.`);
      });

    console.log("Starting Server...");
  } catch (error) {
    console.log("Error trying to lift server: ", error.stack);
  }
};

server();

module.exports = server;
