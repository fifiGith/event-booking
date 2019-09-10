const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const mongoose = require("mongoose");
const graphqlSchema = require("./graphql/schema/index");
const graphqlResovlers = require("./graphql/resolvers/index");
const auth = require("./middleware/auth");

const app = express();

app.use(bodyParser.json());

app.use(auth);

app.use(
  "/api",
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResovlers,
    graphiql: true
  })
);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster-rfvcg.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3000);
  })
  .catch(err => console.log(err));
