// All required node modules
require("dotenv").config();
var request = require('request');
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var moment = require('moment');

// Node processes
var command = process.argv[2];
var search = process.argv[3];
var query = process.argv;

// Search Helper function
function searchHelper() {
    var search = "";
    for (var i = 3; i < query.length; i++) {
        if (i > 3 && i < query.length) {
            search = search + "+" + query[i];
        } else {
            search += query[i];
        }
    }
}


// Bands In Town search
function concertThis(search) {

    searchHelper();

    request("https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp", function(error, response, body) {
        if (error) {
            return console.log('Error occurred: ' + error);
        }
        var data = JSON.parse(body);
        for (i = 0; i < data.length; i++){
        console.log("Venue: " + data[i].venue.name);
        var date = data[i].datetime;
        date = moment(date).format("MM/DD/YYYY");
        console.log("Date: " + date)
        }
    });
}

// Spotify search
function spotifyThisSong(search) {
    if (search === undefined) {
        search = "The Sign Ace Of Base";
    }

    searchHelper();

    spotify.search({ type: 'track', query: search, limit: 1}, function(error, data) {
        if (error) {
            return console.log('Error occurred: ' + error);
        }
        console.log("Artists: " + track.artists[0].name);
        console.log("Song Name: " + data.tracks.items[0].name);
        data.tracks.items.forEach(function (track) {  
        console.log("Song Link: " + track.album.href);
        console.log("Album: " + track.album.name);
        });
    });
}


// OMDB search
function movieThis(search) {
    if (search === undefined) {
        search = "Mr. Nobody";
    }

    searchHelper();

    request("https://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy", function(error, response, body) {
        if (error) {
            return console.log('Error occurred: ' + error);
        }
        var data = JSON.parse(body);
        console.log("Title: " + data.Title);
        console.log("Year: " + data.Year);
        console.log("Rated: " + data.Rated);
        if (data.Ratings[1] === undefined) {
            console.log("Rotten Tomatoes: N/A");
        } else {
            console.log("Rotten Tomatoes: " + data.Ratings[1].Value);
        }
        console.log("Country: " + data.Country);
        console.log("Language: " + data.Language);
        console.log("Plot: " + data.Plot);
        console.log("Actors: " + data.Actors);
        
    });
}

// Do What It Says function
function doThis(){
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log('Error occurred: ' + error);
        }
        var data = data.split(",");
        spotifyThisSong(data[1]); 
    });
}

// Switch Commands
switch (command) {
    case "spotify-this-song":
    spotifyThisSong(search);
    break;
    case  "concert-this":
    concertThis(search);
    break;
    case  "movie-this":
    movieThis(search);
    break;
    case "do-what-it-says":
    doThis();
    break;
    default:
    console.log("Please enter a valid command.");
}

