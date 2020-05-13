const { getData } = require('./api');

exports.albumsByUser = () => getData('albums');

exports.photosByAlbum = ({ id }) => getData(`albums/${id}/photos`);
