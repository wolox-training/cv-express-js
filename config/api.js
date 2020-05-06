const { create } = require('axios');

const api = create({
  baseURL: process.env.BASE_API || '',
  timeout: 1500,
  headers: {
    'Content-Type': 'application/json'
  }
});

const getData = url =>
  api
    .get(url)
    .then(({ data }) => data)
    .catch(error => ({ error }));

module.exports = { api, getData };
