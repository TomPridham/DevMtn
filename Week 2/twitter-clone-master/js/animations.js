/**
 * Created by Tom on 2/12/2016.
 */

$(document).ready(function () {
    //initialize libraries
    $("time.timeago").timeago();
    $('[data-toggle="tooltip"]').tooltip();

    //initialize variables
    var maxChar = 140;
    var jtweetCompose = $('.tweet-compose');
    var jcharcount = $('#char-count');
    var tweetHeight = jtweetCompose.height();
    var jsubmit = $('#tweet-submit');
    var jtweetActions = $('.tweet-actions');


    //* Initially, the Tweet button and the character count button should be hidden (CSS).
    jcharcount.hide();
    jsubmit.hide();
    jtweetActions.fadeOut(0);
    $('.stats').fadeOut(0);

    //restores default tweet state
    var defaultTweetState = function () {
        jcharcount.hide();
        jsubmit.hide();
        jtweetCompose.val("");
        jtweetCompose.height(tweetHeight);
    };

    //* When the user clicks on the textarea, the textarea should double in size and the character count and Tweet buttons should be revealed.
    jtweetCompose.focusin(function () {
        jcharcount.show();
        jsubmit.show();
        jsubmit.prop('disabled', true);
        $(this).height(tweetHeight * 2);
    });

    //reverts to default tweet state when tweet text loses focus
    jtweetCompose.focusout(function () {
        setTimeout(function () {
            defaultTweetState()
        }, 100);
    });
    //* As the user types, the character count should decrease.

    jtweetCompose.keyup(function () {
        var length = maxChar - $(this).val().length;

        //* When there are 10 or less characters, the character counter should turn red.
        if (length <= 10) {
            jcharcount.css('color', 'red');
            //* If the user puts in more than 140 characters, the tweet button should be disabled (and re-enabled when there are <= 140 chars).
            if (length < 0) {
                jsubmit.prop('disabled', true)
            }
            else {
                jsubmit.prop('disabled', false);
            }
        }
        else {
            if (length == 140) {
                jsubmit.prop('disabled', false);
            }
            else {
                jsubmit.prop('disabled', false);
            }
            jcharcount.css('color', '#999');
        }
        jcharcount.text(length);
    });

    var Tweet = function () {
        //noinspection JSConstructorReturnsPrimitive,HtmlUnknownTarget
        return ' <div class="tweet"> ' +
            '       <div class="content"> ' +
            '           <img class="avatar" src="img/alagoon.jpg"/> ' +
            '           <strong class="fullname">Tom</strong> ' +
            '           <span class="username">@tomp</span>' +
            '           <p class="tweet-text">' + jtweetCompose.val() + '</p>' +
            '           <div class="tweet-actions"> ' +
            '           <ul> ' +
            '           <li><span class="icon action-reply"></span> Reply</li> ' +
            '           <li><span class="icon action-retweet"></span> Retweet</li> ' +
            '           <li><span class="icon action-favorite"></span> Favorite</li>' +
            '           <li><span class="icon action-more"></span> More</li> ' +
            '           </ul>' +
            '           </div> ' +
            '           <div class="stats"> ' +
            '               <div class="retweets"> ' +
            '               <p class="num-retweets">30</p> ' +
            '               <p>RETWEETS</p> ' +
            '           </div> ' +
            '           <div class="favorites"> ' +
            '               <p class="num-favorites">6</p> ' +
            '               <p>FAVORITES</p> ' +
            '           </div> ' +
            '           <div class="users-interact"> ' +
            '               <div> ' +
            '                   <img src="img/alagoon.jpg"/> ' +
            '                   <img src="img/vklimenko.jpg"/> ' +
            '               </div>' +
            '           </div> ' +
            $.timeago(new Date) +
            '           </div> ' +
            '           <div class="reply"> ' +
            '               <img class="avatar" src="img/alagoon.jpg"/> ' +
            '               <textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>' +
            '           </div>' +
            '       </div>' +
            '   </div>';
    };
    //* When the user successfully inputs characters and clicks the “Tweet” button, a new tweet should be created and added to the tweet stream in the main column, using the user’s fake profile image in the top left and username/fullname.
    jsubmit.on('click tap', function () {

        $('#stream').prepend(Tweet());
        defaultTweetState();
    });

    //hides tweet actions until the users hovers or touches it
    $('.tweet').hover(function () {
            $(this).find(jtweetActions).fadeToggle('fast');
        },
        function () {
            $(this).find(jtweetActions).fadeToggle('fast');
    });

    $('.tweet').click(function(){
        $(this).find('.stats').fadeToggle('fast');
    });

    $('img').tooltip('trigger','hover');
});

