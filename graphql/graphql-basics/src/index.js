import { GraphQLServer } from "graphql-yoga";

// Definicje typów (schema)
const typeDefs = `
  type Query {
    me: User!
    post: Post!
  }

  type Mutation {
    createUser(name: String!, email: String!, age: Int): User!
    createPost(title: String!, body: String!, published: Boolean!): Post!
  }

  type User  {
    id: ID!
    name: String!
    email: String!
    age: Int 
    address: Address
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
    comments: [Comment!]!
  }

  type Comment {
    id: ID!
    text: String!
    author: User!
    post: Post!
  }

  type Address {
    street: String!
    city: String!
    country: String!
    zipCode: String!
  }
`;

// Przykładowe dane
let users = [
  {
    id: "1",
    name: "Mike",
    email: "mike@example.com",
    age: 28,
    address: {
      street: "123 Street",
      city: "City",
      country: "Country",
      zipCode: "12345",
    },
    posts: [],
  },
];

let posts = [
  {
    id: "1",
    title: "First post",
    body: "This is the first post.",
    published: true,
    author: users[0],
    comments: [],
  },
];

let comments = [
  {
    id: "1",
    text: "Great post!",
    author: users[0],
    post: posts[0],
  },
];

// Resolverzy
const resolvers = {
  Query: {
    me() {
      return users[0];
    },
    post() {
      return posts[0];
    },
  },
  Mutation: {
    createUser(parent, args, ctx, info) {
      const { name, email, age } = args;
      const user = {
        id: `${users.length + 1}`,
        name,
        email,
        age,
      };
      users.push(user);
      return user;
    },
    createPost(parent, args, ctx, info) {
      const { title, body, published } = args;
      const post = {
        id: `${posts.length + 1}`,
        title,
        body,
        published,
        author: users[0],
        comments: [],
      };
      posts.push(post);
      users[0].posts.push(post);
      return post;
    },
  },
  User: {
    posts(parent) {
      return posts.filter((post) => post.author.id === parent.id);
    },
  },
  Post: {
    author(parent) {
      return users.find((user) => user.id === parent.author.id);
    },
    comments(parent) {
      return comments.filter((comment) => comment.post.id === parent.id);
    },
  },
  Comment: {
    author(parent) {
      return users.find((user) => user.id === parent.author.id);
    },
    post(parent) {
      return posts.find((post) => post.id === parent.post.id);
    },
  },
};

// Inicjalizacja serwera GraphQL
const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("Server is running on port 4000");
});
