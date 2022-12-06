import { ApolloProvider } from '@apollo/client';
import './assets/App.css';
import client from './config/apolloClient';
import Routes from './routes';

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}

export default App;
