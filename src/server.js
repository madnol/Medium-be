const express = require("express");
const listEndpoints = require("express-list-endpoints");
const { join } = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const articlesRouter = require("./articles");
const {
  notFoundErrorHandler,
  unauthorizedErrorHandler,
  forbiddenErrorHandler,
  badRequestErrorHandler,
  catchAllErrorHandler,
} = require("./errorHandling");

const server = express();
const port = process.env.PORT || 5001;
const staticFolderPath = join(__dirname, "../public");

//MIDDLEWARES

//ROUTES
server.use(express.json());
server.use("/articles", articlesRouter);
server.use(cors());
//ERROR HANDLERS
server.use(notFoundErrorHandler);
server.use(unauthorizedErrorHandler);
server.use(forbiddenErrorHandler);
server.use(badRequestErrorHandler);
server.use(catchAllErrorHandler);

console.log(listEndpoints(server));

mongoose
  .connect(process.env.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    server.listen(port, () =>
      console.log(`listen on port: http://localhost:${port}`)
    )
  )
  .catch(err => console.log(err));
