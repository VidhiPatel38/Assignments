"use strict";
/*jshint browser:true*/
/*globals $*/
/*jshint unused:false*/

var data1 = {};
var n;
function init() {
    $("#act1").empty();
    $.ajax({
        url: "http://localhost:3000/actors",
        success: function(response) {
            console.log(response);
            var actors = {};
            actors = response;
            $.each(actors, function(i) {
                console.log(actors[i]);
                var v = actors[i].name;
                var id1 = actors[i].id;
                var s = actors[i].starred;
                console.log(s);
                var x = "<div class=\"mdl-list__item\">" +
                    "<span class=\"mdl-list__item-primary-content\">" +
                    "<i class=\"material-icons mdl-list__item-avatar\">person</i> " +
                    "<span>" + v + "</span> </span>";

                if (actors[i].starred) {
                    x += "<a class=\"mdl-list__item-secondary-action\" href=\"#\" ><i class=\"material-icons\" onclick=\"updatename1(" + id1 + ",'" + v + "'," + s + ")\">star</i></a></div>";
                    $("#act1").append(x);
                } else {
                    x += "<a class=\"mdl-list__item-secondary-action\" href=\"#\" ><i class=\"material-icons\" onclick=\"updatename1(" + id1 + ",'" + v + "'," + s + ")\">star_border</i></a></div>";
                    $("#act1").append(x);

                }
            });
        }
    });
}



$(document).ready(function() {
    init();

});



function addactors() {
    n = $("#sample1").val();
    if (n === "" || n === null) {
        window.alert("Enter name");
    } else {
        data1 = {
            "name": n,
            "starred": false
        };
        $.ajax({
            url: "http://localhost:3000/actors",
            dataType: "json",
            type: "POST",
            data: data1,
            success: function() {
                // window.alert("successful");
                init();
            },
            error: function(e) {
                console.log(e);
            }
        });
        $("#sample1").val("");
    }
}

function updatename1(id1, v, s) {
    var d;
    if (s === true) {
        d = {
            "name": v,
            "starred": false
        };

    } else {
        d = {
            "name": v,
            "starred": true
        };
    }
    $.ajax({
        url: "http://localhost:3000/actors/" + id1,
        dataType: "json",
        type: "PUT",
        data: d,
        //async: false,        
        success: function() {
            init();
        },
        error: function(e) {
            console.log(e);
        }
    });
}
