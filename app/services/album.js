const { getData } = require('./api');

exports.albumsByUser = () => {
  const url = 'albums';
  return getData(url);
};

exports.photosByAlbum = ({ id }) => {
  const url = `albums/${id}/photos`;
  return getData(url);
};
