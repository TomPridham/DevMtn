$(document).ready(function () {

    var color = "white";
    var colors = 'red blue green yellow white';
    //selector //listener //callback
    $('.box').on("click", function () {
        $(this).addClass(color); // function body
    })

    $(".box").on('dblclick', function () {
        $(this).removeClass(colors);
    })

    $('#reset').on('click', function () {
        $('.box').removeClass(colors);
    })

    $('#red').on('click', function () {
        color = 'red';
    })

    $('#blue').on('click', function () {
        color = 'blue';
    })

    $('#green').on('click', function () {
        color = 'green';
    })

    $('#yellow').on('click', function () {
        color = 'yellow';
    })

    $('#white').on('click', function () {
        color = 'white';
    })


})