import constants from './constants'
import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { useNavigate } from 'react-router';
  
const errorLink = onError(({ graphQLErrors, networkError }) => {

    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path, extensions }) => {
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )

            switch(extensions.code) {
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
});

export default client

