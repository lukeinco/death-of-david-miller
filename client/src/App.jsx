import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';

// import Header from './components/Header';
// import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        {/* <Header />
        <div>
          <Outlet />
        </div>
        <Footer /> */}
      </div>
    </ApolloProvider>
  );
}

export default App;
