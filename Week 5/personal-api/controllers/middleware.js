/**
 * Created by Tom on 3/3/2016.
 */

module.exports = {

    addHeaders: function (request, response, next) {
        response.status(200).set({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'X-XSS-Protection': '1; mode=block',
            'X-Frame-Options': 'SAMEORIGIN',
            'Content-Security-Policy': "default-src 'self' devmountain.github.io"
        });

        next();
    }
};