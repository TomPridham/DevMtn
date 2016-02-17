/**
 * Created by Tom on 2/16/2016.
 */
myApp.service('server', function () {
    var quotes = [
        {text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
        {text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
        {text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
        {
            text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.',
            author: 'Robert Frost'
        },
        {
            text: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
            author: 'Amelia Earhart'
        },
        {text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
        {text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}];

    this.getData = function () {
        return quotes;
    };

    this.addData = function (dataIn) {
        for (var key in dataIn) {
            if (key != 'author' && key != 'text') {
                alert('your data is bad and you should feel bad');
                return;
            }
        }
        quotes.push(dataIn);
    };

    this.removeData = function (textIn) {
        for (var i = 0; i < quotes.length; i++) {
            if(quotes[i].text === textIn){
                quotes.splice(i,1);
                return;
            }
        }
        alert('that text wasn\'t there. why are you wasting my time?');
    };

});