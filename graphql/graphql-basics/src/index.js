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

// Type definitions (schema)
const typeDefs = `

  type Query {
    users(query: String): [User!]!
    posts(query: String): [Post!]!
    me: User!
    post: Post!
  }

  type User  {
    id: ID!
    name: String!
    email: String!
    age: Int 
    posts: [Post!]!
  }
   
  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
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
    Post: {
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
    },
    Mutation: {
      createUser(parent, args, ctx, info) {
        const { name, email, age } = args;
        const user = {
          id: String(users.length + 1),
          name,
          email,
          age,
        };
        users.push(user);
        return user;
      },
      createPost(parent, args, ctx, info) {
        const { title, body, published, author } = args;
        const post = {
          id: String(posts.length + 1),
          title,
          body,
          published,
          author,
        };
        posts.push(post);
        return post;
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
