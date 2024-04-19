import { GraphQLServer } from "graphql-yoga";

const users = [
  {
    id: "1",
    name: "Szymon",
    email: "szymon@example.com",
    age: "21",
  },
  {
    id: "2",
    name: "Sarah",
    email: "sarah@exaple.com",
  },
  {
    id: "3",
    name: "Roko",
    email: "roko@example.com",
    age: "12",
  },
];

// Type definitions (schema)
const typeDefs = `

  type Query {
    users(query: String): [User!]!
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
    users(parent, args, ctx, info) {
      if (args.query) {
        return users;
      }
      return users.filter((user) => {
        return user.name
          .toLocaleLowerCase()
          .includes(args.query.toLocaleLowerCase());
      });
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
