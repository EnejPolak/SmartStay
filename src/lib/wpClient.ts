import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://cms.qr-space.si/graphql';

export const wpClient = new GraphQLClient(endpoint, {
  headers: {
    'Content-Type': 'application/json',
  },
});

