const express = require("express");
const SocketIO = require("socket.io");
const helmet = require("helmet");
const app = express();
app.use(helmet());

app.use(express.static(`${__dirname}/public`));
const expressServer = app.listen(8080, (_, __) => {
  console.log("Express Server Started on Port 8080");
});
const IO = SocketIO(expressServer);

module.exports = {
  app,
  IO,
};
