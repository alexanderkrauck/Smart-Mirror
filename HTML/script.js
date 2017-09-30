Languages = {
    ENGLISH: 0,
    GERMAN: 1
}


//Other fields
//region
var audioElement;
var defaultLanguage = Languages.ENGLISH;
var setLanguage = 1;
//endregion




//Fields for using the smart-mirror in multiple languages:
//region
//The fields which are actually used in the code:
//region
var daytime_night;
var daytime_morning;
var daytime_noon;
var daytime_afternoon;
var daytime_evening;

var greeting_night;
var greeting_morning;
var greeting_noon;
var greeting_afternoon;
var greeting_evening;
//endregion

//ENGLISH: prefix is "en":
//region
var en_daytime_night = "In the night";
var en_daytime_morning = "In the morning";
var en_daytime_noon = "In the noon";
var en_daytime_afternoon = "In the afternoon";
var en_daytime_evening = "In the evening";

var en_greeting_night = "Good night!";
var en_greeting_morning = "Good morning!";
var en_greeting_noon = "Good noon!";
var en_greeting_afternoon = "Good afternoon!";
var en_greeting_evening = "Good evening!";
//endregion
//GERMAN: prefix is "de":
//region
var de_daytime_night = "In der Nacht";
var de_daytime_morning = "Am Morgen";
var de_daytime_noon = "Zu Mittag";
var de_daytime_afternoon = "Am Nachmittag";
var de_daytime_evening = "Am Abend";

var de_greeting_night = "Gute Nacht!"
var de_greeting_morning = "Guten Morgen!";
var de_greeting_noon = "Schönen Mittag!";
var de_greeting_afternoon = "Schönen Nachmittag!";
var de_greeting_evening = "Guten Abend!";
//endregion
//endregion

$(document).ready(function () {
    setLanguages();
    setTimeout(main, 5000);
});

function setLanguages() {
    if (setLanguage == null)
        setLanguage = defaultLanguage;

    switch (setLanguage) {
        case 0:
            daytime_night = en_daytime_night;
            daytime_morning = en_daytime_morning;
            daytime_noon = en_daytime_noon;
            daytime_afternoon = en_daytime_afternoon;
            daytime_evening = en_daytime_evening;

            greeting_night = en_greeting_night;
            greeting_morning = en_greeting_morning;
            greeting_noon = en_greeting_noon;
            greeting_afternoon = en_greeting_afternoon;
            greeting_evening = en_greeting_evening;
            break;
        case 1:
            daytime_night = de_daytime_night;
            daytime_morning = de_daytime_morning;
            daytime_noon = de_daytime_noon;
            daytime_afternoon = de_daytime_afternoon;
            daytime_evening = de_daytime_evening;

            greeting_night = de_greeting_night;
            greeting_morning = de_greeting_morning;
            greeting_noon = de_greeting_noon;
            greeting_afternoon = de_greeting_afternoon;
            greeting_evening = de_greeting_evening;
            break;
    }
}

function main() {
    //call the clock function every second
    setInterval(timerFunction, 1000)

    //-audioElement = document.createElement('audio');
    //-audioElement.setAttribute('src', './Sounds/tick.wav');
    //-audioElement.play();

    var height = $(document).height();
    var width = $(document).width();
    $("#body").css("height", height);
    $("#body").css("width", width);
    /*
    $("#view_text_animation").fadeOut(0, function () {
        $("#view_text_animation").fadeIn(2000, function () {
            $("#view_text_animation").fadeOut(4000, null);
        });
    });*/


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
}

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
            text = daytime_night;
            break;

        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            text = daytime_morning;
            break;
        case 12:
        case 13:
        case 14:
            text = daytime_noon;
            break;
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            text = daytime_afternoon
            break;
        case 20:
        case 21:
        case 22:
            text = daytime_evening
    }


    //set the elements
    document.getElementById("current_time").innerHTML = currentDate.getHours() + ":" + minutePuffer + currentDate.getMinutes() + ":" + secondPuffer + currentDate.getSeconds();
    document.getElementById("current_time_text").innerHTML = text;
}
