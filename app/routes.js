const { paramsValidator } = require('./middlewares/schemaValidator');
const { userSchema } = require('./schemas/user');
const { healthCheck } = require('./controllers/healthCheck');

// album controller
const { getAlbums, getPhotos } = require('./controllers/album');

// user controller
const { signUp } = require('./controllers/user');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/albums', getAlbums);
  app.get('/albums/:id/photos', getPhotos);
  app.post('/users', paramsValidator(userSchema), signUp);
};
