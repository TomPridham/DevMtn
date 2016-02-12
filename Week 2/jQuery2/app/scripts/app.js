/**
 * Created by Tom on 2/11/2016.
 */

$(document).ready(function () {
    var listo = [];
    $('#newList').parent().hide();
    $('#currentList').parent().hide();
    $('#archivedList').parent().hide();
    $(":checkbox").labelauty();

    //constructor for tasks
    var Task = function (task) {
        this.task = task;
        this.id = "new";
    };

    //advances a task from next stage
    var advanceTask = function (task) {
        var modified = task.innerText.trim();
        for (var i = 0; i < listo.length; i++) {
            if (listo[i].task === modified) {
                if (listo[i].id === 'new') {
                    listo[i].id = 'inProgress';
                    $('#currentList').parent().show();
                }
                else if (listo[i].id === 'inProgress') {
                    listo[i].id = 'archived';
                    $('#archivedList').parent().show();
                }
                else {
                    listo.splice(i, 1);
                }
                break;
            }
        }
        task.remove();
    };

    //moves task from new to inProgress
    $(document).on('click', '#item', function (e) {
        e.preventDefault();
        var task = this;
        advanceTask(task);
        task.id = 'inProgress';
        $('#currentList').append(task.outerHTML);
        if($('.newList').length-1 === 0){
            $('.newList').parent().hide();
        }
    });

    //moves task from inProgress to archived
    $(document).on('click', '#inProgress', function (e) {
        e.preventDefault();
        var task = this;
        task.id = 'archived';
        var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
        advanceTask(task);
        $('#archivedList').append(changeIcon);
        if($('.currentList').length-1 === 0){
            $('.currentList').parent().hide();
        }
    });

    //deletes tasks
    $(document).on('click', '#archived', function (e) {
        e.preventDefault();
        var task = this;
        advanceTask(task);
        if($('.archivedList').length-1 === 0){
            $('.archivedList').parent().hide();
        }
    });

    //adds tasks to new list
    var addTask = function (task) {
        if (task) {
            task = new Task(task);
            listo.push(task);

            $("#newItemInput").val("");
            $("#newList").append(
                '<div><div class="list-group-item" id="item"><input type="checkbox"/>' + task.task + '</div></div>'
            );
        }
      //  $('#newTaskForm, #newListItem').fadeToggle("fast", "linear");
    };

    //saves new tasks
    $("#saveNewItem").on('click', function (e) {
        e.preventDefault();
        var task = $("#newItemInput").val().trim();
        $('#newList').parent().show();
        addTask(task);
    });

    //opens form
    $("#newListItem").on('click', function (e) {
        $("#newTaskForm, #newListItem").fadeToggle('fast', 'linear');
    });

    //closes form
    $('#cancel').on('click', function (e) {
        e.preventDefault();
        $('#newItemInput').val("");

    });

});