const { healthCheck } = require('./controllers/healthCheck');

// album controller
const { getAlbums, getPhotos } = require('./controllers/album');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/albums', getAlbums);
  app.get('/albums/:id/photos', getPhotos);
};
