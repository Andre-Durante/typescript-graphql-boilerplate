import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'node-fetch';
import gql from 'graphql-tag';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
    fetch: fetch as any
  })
});

describe('UserResolver', () => {
  beforeAll(async () => {
    // Ensure your server is running before tests
  });

  it('fetches list of users', async () => {
    const GET_USERS = gql`
      query {
        users {
          id
          name
          email
        }
      }
    `;

    const { data } = await client.query({ query: GET_USERS });
    expect(data.users).toHaveLength(2);
  });

  it('fetches a single user', async () => {
    const GET_USER = gql`
      query {
        user(id: 1) {
          id
          name
          email
        }
      }
    `;

    const { data } = await client.query({ query: GET_USER });
    expect(data.user).toEqual({
      __typename: "User", // Add this line
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com'
    });
  });
});
