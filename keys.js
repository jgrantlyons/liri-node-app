// OMDb API key: 1910d14d
// http://www.omdbapi.com/?i=tt3896198&apikey=1910d14d

// Spotify API documentation: https://www.npmjs.com/package/node-spotify-api

console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
