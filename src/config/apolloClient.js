import constants from './constants'
import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
  
const errorLink = onError(({ graphQLErrors, networkError }) => {

    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path, extensions, name }) => {
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
 
            switch(message.split('@')[0]) {
                case "UNAUTHENTICATED":
                    window.location.assign('/login')
                break;
            }
        });
    }
    

    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
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
    defaultOptions: {
        query: {
            fetchPolicy: 'no-cache'
        }
    }
});

export default client

