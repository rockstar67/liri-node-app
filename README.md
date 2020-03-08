# liri-node-app

# Overview

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

This app can take in the following commands:

* spotify-this-song
* concert-this
* movie-this
* do-what-it-says

## Commands:

**spotify-this-song** |name of song|

Will give you all the info about the song you queried:

  *  The song's name
  *  Artist(s)
  *  A preview link of the song from Spotify
  *  The album that the song is from

**concert-this** |name of artist|

Will give you all the info about the events of the artist you queried:

  *  Name of the venue
  *  Venue location
  *  Date of the Event

**movie-this** |name of movie|

Will give you all the info about the movie you queried:

  *  Title of the movie.
  *  Year the movie came out.
  *  IMDB Rating of the movie.
  *  Rotten Tomatoes Rating of the movie.
  *  Country where the movie was produced.
  *  Language of the movie.
  *  Plot of the movie.
  *  Actors in the movie.

**do-what-it-says**

Will display the default info.
## Technologies

  *  Node.js
  *  Moment.js
  *  Spotify API
  *  Bands In Town API
  *  OMDb API
