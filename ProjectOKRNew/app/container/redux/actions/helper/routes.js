import { apiKeys } from './apiKeys';

export const generateRoute = (apiKey, data) => {
  switch (apiKey) {
    default: {
      return null;
    }
    case apiKeys.objectives:
      return `https://okrcentral.github.io/sample-okrs/db.json`;
  }
};

export const requestHeaders = () => {
  const headers = {
    'Content-Type': 'application/json',
    'cache-control': 'no-cache'
  };
  return headers;
};
