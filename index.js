const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const PORT = process.env.PORT || 8000;
// const MONGODB = "mongodb+srv://admin:coopercodes@apolloserversetup.n9ghj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const MONGODB =
  "mongodb+srv://stailzsanchez:ghjcnjnfr@cluster0.cslchur.mongodb.net/?retryWrites=true&w=majority";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // csrfPrevention: true,
  // cache: "bounded",
  // cors: {
  //   origin: [
  //     "https://www.your-app.example",
  //     "https://studio.apollographql.com",
  //     "https://gql-auth-server.herokuapp.com/",
  //   ],
  // },
});

mongoose.connect(MONGODB, { useNewUrlParser: true }).then(() => {
  console.log("MongoDB Connected");
  server.listen(() => console.log(`Server started on port - ${PORT}`));
});
