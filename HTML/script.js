var audioElement;

$(document).ready(function () {
    //call the clock function every second
    setInterval(timerFunction, 1000)

    //-audioElement = document.createElement('audio');
    //-audioElement.setAttribute('src', './Sounds/tick.wav');
    //-audioElement.play();
    
    var height = $(document).height();
    var width = $(document).width();
    $("#body").css("height",height);
    $("#body").css("width",width);
    
    $("#view_text_animation").fadeOut(0,function(){
        $("#view_text_animation").fadeIn(2000,function(){
            $("#view_text_animation").fadeOut(4000,null);
        });
    });
    

    $.simpleWeather({
        location: 'Linz',
        woeid: '',
        unit: 'c',
        success: function (weather) {
            //-alert(weather.temp);
        },
        error: function (error) {
            //-alert("Weather not avaiable!");
        }
    });
});

function timerFunction() {
    var currentDate = new Date();

    //set the optional '0' chars for the hour and the minute.
    var minutePuffer = currentDate.getMinutes() > 9 ? "" : "0";
    var secondPuffer = currentDate.getSeconds() > 9 ? "" : "0";


    //set the daytime text depended on the hour of the day.
    var text = "";
    switch (currentDate.getHours()) {
        case 23:
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            text = "In the night";
            break;

        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            text = "In the morning";
            break;
        case 12:
        case 13:
        case 14:
            text = "In the noon";
            break;
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            text = "In the afternoon"
            break;
        case 20:
        case 21:
        case 22:
            text = "In the evening"
    }


    //set the elements
    document.getElementById("current_time").innerHTML = currentDate.getHours() + ":" + minutePuffer + currentDate.getMinutes() + ":" + secondPuffer + currentDate.getSeconds();
    document.getElementById("current_time_text").innerHTML = text;
}
