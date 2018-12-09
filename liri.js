// code to read and set any environment variables with the dotenv package
require("dotenv").config();

// let nodeOmdb = require("");

// access key info
// var spotify = new Spotify(keys.spotify);
// console.log(spotify)


// let keys = require('keys.js');

// var request = require("request");

// request("http://www.omdbapi.com/?i=tt3896198&apikey=1910d14d", function(error, response){
//     localStorage
// })


let searchType = process.argv[2];
let searchInput = process.argv[3];

let newSearch = searchInput.split(" ");
console.log(newSearch);


if (searchType === "movie-this") {
    let finalSearch
    for (let i = 0; i < newSearch.length; i++) {
        finalSearch = "'" + newSearch[i] + "'+";
        console.log(finalSearch);
    }

    var request = require('request');
    let searchURL = "http://www.omdbapi.com/?apikey=1910d14d&t=" + finalSearch
    request(searchURL, function (error, response, body) {
        if (error) {
            console.log(error);
        } else {

            console.log(body.Title);
            // console.log(response.Title, response.Year, response.imdbRating, response.Ratings[2].Value, response.Country, response.Language, response.Plot, response.Actors);
        };
    });
    // request('http://www.google.com', function (error, response, body) {
    //   console.log('error:', error); // Print the error if one occurred
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //   console.log('body:', body); // Print the HTML for the Google homepage.
    // });
}


