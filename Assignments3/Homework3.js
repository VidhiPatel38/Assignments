/*jshint browser:true*/
/*globals $*/
/*globals _*/
var main = function () {
    "use strict";
    var answers = [];
    var addstring = [];
    var $new_comment;
    var $new_comment1;
    var $new_sum;
    var addCommentFromInputBox = function(){   
            
        //add numbers to array
        if ($(".comment-input input").val() !== ""){
            answers.push(parseInt(document.getElementById("number1").value));
            $new_comment = $("<p>").text($(".comment-input input").val());
            $(".comments").append($new_comment);
            $(".comment-input input").val("");
        }
        else{
            window.alert("enter the number");
        }
        }; 
              
         // add string to array
        var addCommentFromInputBox1 = function() {
        if ($(".comment-input1 input").val() !== "") {
            addstring.push(document.getElementById("string1").value);
            $new_comment1 = $("<p>").text($(".comment-input1 input").val());
            $(".comments1").append($new_comment1);
        $(".comment-input1 input").val("");
        }
        else{
            window.alert("enter the stringr");
        }                
        };
    
    //average
    var exercise1 = function (nums) {
        var sum = 0;
        var average = 0;
        nums.forEach(function (value) {
            sum = sum + value;
        });
        average = sum / nums.length;
        return average;
    };
        
        
    //Largest number
        var exercise2 = function (nums) {
        var largest = nums[0];
        var i = 0;
        for (i = 1; i < nums.length; i++) {
            if (nums[i] > largest) {
                largest = nums[i];
            }
        }
        return largest;
    };
          
    //atleast one even number 
        var exercise3 = function (nums) {
        var even = "false";
        nums.forEach(function (value) {
            if (value % 2 === 0) {
                console.log(value / 2);
                even = true;
                return even;
            }
        });
        return even;
    };
    
       
    //all even number
        var exercise4 = function (nums) {
        var even = true;
        nums.forEach(function (value) {
            if (value % 2 === 1) {
                console.log(value / 2);
                even = false;
                return even;
            }
        });
        return even;
    };
        
        
    //find string once
    var arraycontains = function (strings1, findstring) {        
        var found = $.inArray(findstring, strings1) > -1;
        console.log(found);
        return found;
    };
     
    //find string twice
    var arraycontainstwo = function (strings1, findstring) {
        var i;
        var count = 0;
        for (i = 0; i < strings1.length; i++) {
            if (findstring === strings1[i]) {
                count++;
                if (count === 2) {
                    return true;
                }
            }
        }
        return false;
    };
    
    
    //Find string N times
    var arraycontainsNtimes = function (strings1, findstring,n) {
        var i;
        var count = 0;
        for (i = 0; i < strings1.length; i++) {
            if (findstring === strings1[i]) {
                count++;
                if (count === n) {
                    return true;
                }
            }
        }
        return false;
         
    };

    
    
   
      
    
    //Adding the numbers
    $("#ADD").on("click", function () {
        addCommentFromInputBox();
    });

    //Adding the string
    $("#addstring").on("click", function () {
        addCommentFromInputBox1();
    });

    $("#average").on("click", function () {
        if (answers.length === 0) {
            window.alert("array of number is empty");
        }
        else {
            var average = exercise1(answers);
            var text = "the AVERAGE is ";
            $new_sum = $("<div>").append(text).append(average);
            $(".comments").append($new_sum);
        }
    });

    $("#largest").on("click", function () {
        if (answers.length === 0) {
            window.alert("array of number is empty");
        }
        else {
            var largest = exercise2(answers);
            var text = "the LARGEST number is ";
            $new_sum = $("<div>").append(text).append(largest);
            $(".comments").append($new_sum);
            console.log(largest);
        }
    });

    $("#evennumber").on("click", function () {
        if (answers.length === 0) {
            window.alert("array of number is empty");
        }
        else {
            var even1 = exercise3(answers);
            console.log(even1);
            var text = "there is atleast one even number = ";
            $new_sum = $("<div>").append(text).append(even1.toString());
            $(".comments").append($new_sum);
        }
    });

    $("#evenarray").on("click", function () {
        if (answers.length === 0) {
            window.alert("array of number is empty");
        }
        else {
            var alleven = exercise4(answers);
            console.log(alleven);
            var text = "All of numbers are even = ";
            $new_sum = $("<div>").append(text).append(alleven.toString());
            $(".comments").append($new_sum);
        }
    });

 
    //for largest number
    $("#underscorelargest").on("click", function () {
        if (answers.length === 0) {
            window.alert("array of number is empty");
        }
        else {
            var maxnum = _.max(answers);
            var text = "The largest number is = ";
            $new_sum = $("<div>").append(text).append(maxnum);
            $(".comments").append($new_sum);
        }
    }); 
       
 
    
    //for ony one even number
    $("#underscoreanyeven").on("click", function () {
        if (answers.length === 0) {
            window.alert("array of number is empty");
        }
        else {
            var even = _.some(answers, function (num) { return num % 2 === 0; });
            var text = "Atleast one number is even in array = ";
            $new_sum = $("<div>").append(text).append(even.toString());
            $(".comments").append($new_sum);
        }
    }); 
                 
    

    // for all even number   
    $("#underscoreevennumber").on("click", function () {
        if (answers.length === 0) {
            window.alert("array of number is empty");
        }
        else {

            var everyTest = _.every(answers, function (number1) {
                return (number1 % 2 === 0);
            });
            var text = "All of numbers are even = ";
            $new_sum = $("<div>").append(text).append(everyTest.toString());
            $(".comments").append($new_sum);
        }
    });

    //find the string present once
    $("#findonce").on("click", function () {
        if ((addstring.length === 0) || ($("#string1").val() === "")){
            window.alert("array of string is empty or enter the element to search");
        }
        else {
            var searchstring = document.getElementById("string1").value;
            console.log(searchstring);
            console.log(addstring);
            var found = arraycontains(addstring, searchstring);
            var text = "The string is present = ";
            $new_sum = $("<div>").append(text).append(found.toString());
            $(".comments1").append($new_sum);
            $("#string1").val("");
        }
    });

    //find the string twice
    $("#findtwice").on("click", function () {
        if ((addstring.length === 0) || ($("#string1").val() === "")){
            window.alert("array of string is empty or enter the element to search");
        }
        else {
            var searchstring = document.getElementById("string1").value;
            var found = arraycontainstwo(addstring, searchstring);
            var text = "The string is present = ";
            $new_sum = $("<div>").append(text).append(found.toString());
            $(".comments1").append($new_sum);
            $("#string1").val("");
        }
    });
    
    //Find N times
    $("#findN").on("click", function () {
        if (addstring.length === 0){
            window.alert("array of string is empty or enter the element to search");
        }
        else {
        $("#n").show();
        $("#ntimes").show();
        }
    });
    
    //on N times
    $("#ntimes").on("click", function () {
        var searchstring = document.getElementById("string1").value;
        var n = parseInt(document.getElementById("n").value);
        console.log(searchstring);
        console.log(n);
        var found = arraycontainsNtimes(addstring, searchstring,n);
        var text = "The string is present " + n + " times = " ;
        $new_sum = $("<div>").append(text).append(found.toString());
        $(".comments1").append($new_sum);
        $("#string1").val("");
        $("#n").val("");
        $("#n").hide();
        $("#ntimes").hide();  
    });
        
    //clear the values
    $("#clear1").on("click", function () {
        $("p").empty();
        $("div").empty();
        answers = [];
        addstring = [];
    });
    
     $("#clear2").on("click", function () {
        $("p").empty();
        $("div").empty();
        answers = [];
        addstring = [];
    });

};

$(document).ready(main);
