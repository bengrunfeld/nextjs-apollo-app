import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql } from "apollo-boost";
import { ExchangeRates } from "../components";

const Home = () => {
  const client = new ApolloClient({
    uri: "https://48p1r2roz4.sse.codesandbox.io",
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
