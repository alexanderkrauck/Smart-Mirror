var audioElement;

$(document).ready(function () {
    setInterval(timerFunction, 1000)
    
    audioElement = document.createElement('audio');
    audioElement.setAttribute('src', './Sounds/tick.wav');
    
    $.simpleWeather({
        location: 'Linz',
        woeid: '',
        unit: 'c',
        success: function (weather) {
            //alert(weather.temp);
        },
        error: function (error) {
            //alert("Weather not avaiable!");
        }
    });
});

function timerFunction() {
    var currentDate = new Date();

    var minutePuffer = currentDate.getMinutes() > 9 ? "" : "0";
    var secondPuffer = currentDate.getSeconds() > 9 ? "" : "0";


    document.getElementById("current_time").innerHTML = currentDate.getHours() + ":" + minutePuffer + currentDate.getMinutes() + ":" + secondPuffer + currentDate.getSeconds();
    
    audioElement.play();
    
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

    document.getElementById("current_time_text").innerHTML = text;
}
