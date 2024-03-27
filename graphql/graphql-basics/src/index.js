import { GraphQLServer } from "graphql-yoga";

// Type definitions (schema)
const typeDefs = `
  type Query {
    hello: String!
    name: String!
    id: String!
    age: String!
    location: String!
  }

`
// Resolvers

const resolvers = {
  Query: {
    hello() {
      return "This is my first query!";
    },
    name(){
      return 'Simon'
    },
    id(){
      return 'm4d25896g458!2'
    },
    age(){
      return '21'
    },
    location(){
      return 'United Kingdom of Great Britain and Northern Ireland'
    }
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("the server is up");
});
