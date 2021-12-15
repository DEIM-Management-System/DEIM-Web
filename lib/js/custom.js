$(function() {
    var arr = [];
    $("#platina div").each(function() {
        arr.push($(this).html());
    });
    arr.sort(function() {
        return Math.random() - Math.random();
    });
    $("#platina").empty();
    for(i=0; i < arr.length; i++) {
        $("#platina").append('<div class="col-md-8 offset-md-2">' + arr[i] + '</div>');
    }
});

$(function () {
    var arr = [];
    $("#gold div").each(function () {
        arr.push($(this).html());
    });
    arr.sort(function () {
        return Math.random() - Math.random();
    });
    $("#gold").empty();
    for (i = 0; i < arr.length; i++) {
        $("#gold").append('<div class="col-md-6">' + arr[i] + '</div>');
    }
});


$(function () {
    var arr = [];
    $("#silver div").each(function () {
        arr.push($(this).html());
    });
    arr.sort(function () {
        return Math.random() - Math.random();
    });
    $("#silver").empty();
    for (i = 0; i < arr.length; i++) {
        $("#silver").append('<div class="col-sm-6">' + arr[i] + '</div>');
    }
});



$(function () {
    var arr = [];
    $("#sponserevent div").each(function () {
        arr.push($(this).html());
    });
    arr.sort(function () {
        return Math.random() - Math.random();
    });
    $("#sponserevent").empty();
    for (i = 0; i < arr.length; i++) {
        $("#sponserevent").append('<div class="col-lg-12">' + arr[i] + '</div>');
    }
});


