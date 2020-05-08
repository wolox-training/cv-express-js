const { create } = require('axios');

const api = create({
  baseURL: process.env.BASE_API || '',
  timeout: 1500,
  headers: {
    'Content-Type': 'application/json'
  }
});

module.exports = api;
