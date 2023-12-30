import { gql } from '@apollo/client';

export const ADD_USERS = gql`
query Query {
    users {
      _id
      firstName
      lastName
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
query Query($userId: ID!) {
    user(userId: $userId) {
      _id
      firstName
      lastName
    }
  }
`;

export const QUERY_ME = gql`
query Query {
    me {
      _id
      firstName
      lastName
    }
  }
`;