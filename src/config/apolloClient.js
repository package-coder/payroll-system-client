import { ApolloClient, InMemoryCache } from '@apollo/client';
import constants from './constants';


const client = new ApolloClient({
    uri: constants.APOLLO_CLIENT_URL,
    cache: new InMemoryCache(),
});

export default client

