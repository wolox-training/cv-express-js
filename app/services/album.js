const { getData } = require('./api');

exports.albumsByUser = () => {
  const url = 'albums';
  return getData(url);
};

exports.photosByAlbum = albumId => {
  const url = `albums/${albumId}/photos`;
  return getData(url);
};
