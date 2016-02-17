/**
 * Created by Tom on 2/16/2016.
 */

myApp.service('myService', function () {

    this.reallyLike = [];
    this.kindOfLike = [];

    this.addNewArtist = function (artistObj) {
        var artist = buildArtist(artistObj.name, artistObj.genre, artistObj.rating);
        //pushes new input artist to correct list
        if (this.rating >= 50) {
            this.reallyLike.push(artist);
        }
        else {
            this.kindOfLike.push(artist);
        }
    };

    //constructor for artists
    function buildArtist(nameIn, genreIn, ratingIn) {
        return {
            name: nameIn,
            genre: genreIn,
            rating: ratingIn
        }
    }
});