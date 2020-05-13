const { healthCheck } = require('./controllers/healthCheck');

// album controller
const { getAlbums, getPhotos } = require('./controllers/album');

// account controller
const { signUp } = require('./controllers/account');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/albums', getAlbums);
  app.get('/albums/:id/photos', getPhotos);
  app.post('/user', signUp);
};
