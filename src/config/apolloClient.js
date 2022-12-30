import constants from './constants'
import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
  
const errorLink = onError(({ graphqlErrors, networkError }) => {

    if (graphqlErrors) {
        graphqlErrors.map(({ message, location, path }) => {
            alert(`Graphql error ${message}`);
        });
    }
});

const link = from([
    errorLink,
    new HttpLink({ 
        uri: constants.APOLLO_CLIENT_URL, 
        credentials: 'include'
    }),
]);
  

const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
});

export default client

