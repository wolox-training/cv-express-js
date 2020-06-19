const { paramsValidator } = require('./middlewares/schemaValidator');
const { userSchema, signInSchema } = require('./schemas/user');
const { healthCheck } = require('./controllers/healthCheck');

// album controller
const { getAlbums, getPhotos } = require('./controllers/album');

// user controller
const { signUp, signIn } = require('./controllers/user');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/albums', getAlbums);
  app.get('/albums/:id/photos', getPhotos);
  app.post('/users', paramsValidator(userSchema), signUp);
  app.post('/users/sessions', paramsValidator(signInSchema), signIn);
};
