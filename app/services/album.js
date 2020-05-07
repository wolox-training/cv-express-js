const { getData } = require('./api');

exports.albumsByUser = userId => {
  const url = `users/${userId}/albums`;
  return getData(url);
};

exports.photesByAlbum = albumId => {
  const url = `albums/${albumId}/photos`;
  return getData(url);
};
