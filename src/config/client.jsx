import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clk785ezv0jul01ur3nhphuzn/master',
  cache: new InMemoryCache(),
})

export default client
