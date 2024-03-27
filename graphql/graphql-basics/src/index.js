import { GraphQLServer } from "graphql-yoga";

// Type definitions (schema)
const typeDefs = `
  type Query {
    id: ID!
    name: String!
    age: Int!
    employed: Boolean!
    gpa: Float
  }

`;
// Resolvers

const resolvers = {
  Query: {
    id() {
      return "m45t9912!d";
    },
    name() {
      return "Andrew";
    },
    age() {
      return 21;
    },
    employed() {
      return true;
    },
    gpa() {
      return 3.11;
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
