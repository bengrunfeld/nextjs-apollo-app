import { ApolloServer, gql } from "apollo-server-micro";

let book = {
  name: "The Large Hungarian Sausage",
  author: "Ben Grunfeld",
};

const typeDefs = gql`
  type Book {
    name: String
    author: String
  }

  type Query {
    book: Book
  }

  type Mutation {
    updateBook(name: String!, author: String!): Book
  }
`;

const resolvers = {
  Query: {
    book: () => book,
  },

  Mutation: {
    updateBook: (root, args) => {
      book.name = args.name;
      book.author = args.author;
      return book;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const handler = server.createHandler({ path: "/api/graphql-data" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
