const { albumsByUser, photosByAlbum } = require('../services/album');

exports.getAlbums = (_, res, next) => {
  albumsByUser()
    .then(data => res.status(200).send({ books: data }))
    .catch(next);
};

exports.getPhotos = (req, res, next) => {
  photosByAlbum(req.params)
    .then(data => res.status(200).send({ photos: data }))
    .catch(next);
};
