const api = require('../../config/api');

const getData = url =>
  api
    .get(url)
    .then(({ data }) => data)
    .catch(error => ({ error }));

module.exports = { getData };
