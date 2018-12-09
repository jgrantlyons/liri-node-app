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


//spotify api search
if (searchType == "spotify-this-song") {
    spotify.search({ type: 'track', query: searchInput }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        let responseObject = JSON.parse(data);

        console.log(responseObject);
        console.log(
            //Artist(s)
            //The song's name
            //A preview link of the song from Spotify
            //The album that the song is from
        );
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

            console.log("title: "+responseObject.Title)
            console.log("year: "+responseObject.Year);
            console.log("imdb rating: "+responseObject.imdbRating);
            console.log("rotten tomatoes rating: "+responseObject.Ratings[2]);
            console.log("country: "+responseObject.Country);
            console.log("language: "+responseObject.Language);
            console.log("plot: "+responseObject.Plot);
            // title
            // year
            // imdbRating
            // rottentomatoeRating
            // country
            // language
            // plot

            // resource below
            // console.log(response.Title, response.Year, response.imdbRating, response.Ratings[2].Value, response.Country, response.Language, response.Plot, response.Actors);
        };
    });
}


