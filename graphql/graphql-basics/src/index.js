import { GraphQLServer } from "graphql-yoga";

// Type definitions (schema)
const typeDefs = `

  type Query {
    greeting(name: String!, position: String!): String!
    add(numbers: [Float]!): Float!
    grades: [Int!]!
    me: User!
    post: Post!
  }

  type User  {
    id: ID!
    name: String!
    email: String!
    age: Int 
  }
   
  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }
`;
// Resolvers
const resolvers = {
  Query: {
    greeting(parent, args, ctx, info) {
      if (args.name && args.position) {
        return `Hello, ${args.name}! You are my favorite ${args.position} `;
      } else {
        return "Hello!";
      }
    },

    add(parent, args, ctx, info) {
      if (args.numbers.length === 0) {
        return 0;
      }

      return args.numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      });
    },

    grades(parent, args, ctx, info) {
      return [99, 80, 93];
    },

    me() {
      return {
        id: "123456",
        name: "Mike",
        email: "mike@example.com",
        age: 28,
      };
    },

    post() {
      return {
        id: "25963",
        title: "NorderW",
        body: "",
        published: "",
      };
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
