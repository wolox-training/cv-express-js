const { albumsByUser, photosByAlbum } = require('../services/album');

module.exports.getAlbums = (_, res) => {
  albumsByUser(1)
    .then(data => res.status(200).send({ books: data }))
    .catch(error => res.status(400).send({ error }));
};

module.exports.getPhotos = (req, res) => {
  const { id } = req.params;
  photosByAlbum(id)
    .then(data => res.status(200).send({ photos: data }))
    .catch(error => res.status(400).send({ error }));
};
