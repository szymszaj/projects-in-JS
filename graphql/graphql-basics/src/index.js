import { GraphQLServer } from "graphql-yoga";
import uuidv4 from "uuid/v4";

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

const posts = [
  {
    id: "10",
    title: "GraphQL",
    body: "This is GraphQL ",
    published: true,
    author: "1",
  },
  {
    id: "11",
    title: "GraphQL 21",
    body: "This is GraphQL... ",
    published: false,
    author: "1",
  },
  {
    id: "12",
    title: "Programing music",
    body: "",
    published: false,
    author: "2",
  },
];
const comments = [
  {
    id: "102",
    test: "This worked well for me.",
    author: "3",
  },
  {
    id: "103",
    text: "Glad you enjoved it.",
    author: "1",
  },

  {
    id: "104",
    text: "This did no work.",
    author: "2",
  },
  {
    id: "105",
    text: "Nevermind. I got it to work",
    author: "1",
  },
];
// Type definitions (schema)
const typeDefs = `

  type Query {
    users(query: String): [User!]!
    posts(query: String): [Post!]!
    comments: [Comment!]!
    me: User!
    post: Post!
  }

  type Mutation {
    createUser(name: String!, email: String!, age: Int): User!
  }

  type User  {
    id: ID!
    name: String!
    email: String!
    age: Int 
    posts: [Post!]!
    comments: [Comment!]!
  }
   
  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
  }
  type Comment {
    id: ID!
    text: String!
    author: User!

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

    posts(parent, args, ctx, info) {
      if (args.query) {
        return posts;
      }

      return posts.filter((post) => {
        const isTitleMatch = post.title
          .toLocaleLowerCase()
          .includes(args.query.toLocaleLowerCase());
        const isBodyMatch = post.body
          .toLocaleLowerCase()
          .includes(args.query.toLocaleLowerCase());
        return isTitleMatch || isBodyMatch;
      });
    },

    comments(parent, args, ctx, info) {
      return comments;
    },

    me() {
      return {
        id: "123456",
        name: "Mike",
        email: "mike@example.com",
        age: 28,
      };
    },
    Mutation: {
      createUser(parent, args, ctx, info) {
        const emailTaken = users.some((user) => user.email === args.email);
        if (emailTaken) {
          throw new Error("Email taken");
        }
        const user = {
          id: uuidv4(),
          name: args.name,
          email: args.email,
          age: args.age,
        };

        users.push(user);
        return user;
      },
    },

    post() {
      return {
        id: "25963",
        title: "NorderW",
        body: "",
        published: "",
      };
    },
    Post: {
      author(parent, args, ctx, info) {
        return users.find((user) => {
          return user.id === parent.author;
        });
      },
    },
    Comment: {
      author(parent, args, ctx, info) {
        return users.find((user) => {
          return user.id === parent.author;
        });
      },
    },
    User: {
      posts(parent, args, ctx, info) {
        return post.filter((post) => {
          return post.author === parent.id;
        });
      },
      comments(parent, args, ctx, info) {
        return comments.filter((comment) => {
          return comment.author === parent.id;
        });
      },
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
