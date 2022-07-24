const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const PORT = process.env.PORT || 3000;
// const MONGODB = "mongodb+srv://admin:coopercodes@apolloserversetup.n9ghj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const MONGODB =
  "mongodb+srv://stailzsanchez:ghjcnjnfr@cluster0.cslchur.mongodb.net/?retryWrites=true&w=majority";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose.connect(MONGODB, { useNewUrlParser: true }).then(() => {
  console.log("MongoDB Connected");
  server.listen(() => console.log(`Server started on port - ${PORT}`));
});
