import { GraphQLServer } from "graphql-yoga";

// Type definitions (schema)
const typeDefs = `
  type Query {
   title: String!
   price: Float!
   releaseYear: Int
   rating: Float!
   inStock: Boolean
  }

`;
// Resolvers
const resolvers = {
  Query: {
    title() {
      return "The Game";
    },
    price() {
      return 40.99;
    },
    releaseYear() {
      return 2005;
    },
    rating() {
      return 5;
    },
    inStock() {
      return true;
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("the server is up");
});
