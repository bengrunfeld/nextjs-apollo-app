import { ApolloServer, gql } from "apollo-server-micro";

const book = {
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
`;

const resolvers = {
  Query: {
    book: () => book,
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
