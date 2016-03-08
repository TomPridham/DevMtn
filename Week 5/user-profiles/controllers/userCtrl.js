/**
 * Created by Tom on 3/7/2016.
 */
var users = [
    {
        name: 'Preston McNeil',
        password: 'password1',
        friends: ['Lindsey Mayer', 'Terri Ruff']
    },
    {
        name: 'Ryan Rasmussen',
        password: '$akgfl#',
        friends: ['Lindsey Mayer']
    },
    {
        name: 'Terri Ruff',
        password: 'hunter2',
        friends: ['Lindsey Mayer', 'Preston McNeil']
    },
    {
        name: 'Lindsey Mayer',
        password: '777mittens777',
        friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
    }
];
module.exports = {
    "login": function (request, response, next) {
        //finds current user
        var index = users.findIndex(function (user) {
            return user.name === request.body.name;
        });
        var user = users[index];

        //validates user
        if (user != -1) {
            //checks password
            if (user.password === request.body.password) {
                request.session.currentUser = user;
                request.session.friends = [];
                //loops through user's friends
                for (var i = 0; i < user.friends.length; i++) {
                    //finds index of current friend in main users array
                    index = users.findIndex(function (friend) {
                        return friend.name === user.friends[i];
                    });
                    request.session.friends.push(users[index]);
                }
                response.status(200).send({userFound: true});
            }
            //password didn't match
            else {
                response.status(200).send({userFound: false});
            }
        }
        else {
            //didn't find user
            response.status(200).send({userFound: false});

        }
    }
};