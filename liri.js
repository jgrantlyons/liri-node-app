//read and set any environment variables with the dotenv package
require("dotenv").config();
//require keys to use for spotify
let keys = require("./keys.js");

//require spotify npm
let Spotify = require("node-spotify-api");


// access spotify key info
var spotify = new Spotify(keys.spotify);
console.log(spotify)


//indentify which api to search
let searchType = process.argv[2];
//create search term variable
let searchInput = process.argv[3];
let newSearch = searchInput.split(" ");

console.log(newSearch);

//bands in town api search
if (searchType === "concert-this") {
    let finalSearch = newSearch.join("%20");
    let request = require('request');
    let searchURL = "https://rest.bandsintown.com/artists/" + finalSearch + "/events?app_id=codingbootcamp";
    request(searchURL, function (error, response) {
        if (error) {
            console.log(error);
        };
        let returnObject = JSON.parse(response.body);
        console.log(returnObject);
        for(let i = 0; i<returnObject.length; i++){
            console.log(returnObject[i].venue.name);
            
        };
    });
};

//spotify api search
if (searchType == "spotify-this-song") {
    spotify.search({ type: 'track', query: searchInput }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        // let responseObject = JSON.parse(data);
        let song = data.tracks.items[0];

        // console.log(song);
        console.log("artist(s)" + song.album.artists[0].name);
        console.log("song name: " + newSearch);
        console.log("link to song preview: " + song.preview_url);
        console.log("album: " + song.album.name);
    });
};

//omdb api search
if (searchType === "movie-this") {
    let finalSearch;
    for (let i = 0; i < newSearch.length; i++) {
        finalSearch = "'" + newSearch[i] + "'+";
        // console.log(finalSearch);
    }
    var request = require('request');
    let searchURL = "http://www.omdbapi.com/?apikey=1910d14d&t=" + finalSearch
    request(searchURL, function (error, response, body) {
        if (error) {
            console.log(error);
        } else {

            // console.log(body);

            let responseObject = JSON.parse(body);

            console.log("title: " + responseObject.Title)
            console.log("year: " + responseObject.Year);
            console.log("imdb rating: " + responseObject.imdbRating);
            console.log("rotten tomatoes rating: " + responseObject.Ratings[2]);
            console.log("country: " + responseObject.Country);
            console.log("language: " + responseObject.Language);
            console.log("plot: " + responseObject.Plot);
        };
    });
};


