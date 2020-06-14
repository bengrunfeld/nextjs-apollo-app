import fetch from "isomorphic-unfetch";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql } from "apollo-boost";

import { ExchangeRates } from "../components";

const Home = ({ data }) => {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <div>
        <h1>NextJS GraphQL Apollo App</h1>
        <ExchangeRates />
      </div>
    </ApolloProvider>
  );
};

export default Home;
