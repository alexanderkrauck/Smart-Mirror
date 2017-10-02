Languages = {
    ENGLISH: 0,
    GERMAN: 1
}


//Other fields
//region
var audioElement;
var defaultLanguage = Languages.ENGLISH;
var setLanguage = 1;

var delayWeather = 900000;
var delayTime = 1000;
var delayDimensions = 10000;

var locationIconSunny = "./Icons/weather_sunny.svg";
var locationIconWindy = "./Icons/weather_windy.svg";
var locationIconCloudy = "./Icons/weather_cloudy.svg";
var locationIconClearNight = "./Icons/weather_clear_night.svg";
var locationIconSnowing = "./Icons/weather_snowing.svg";
var locationIconRaining = "./Icons/weather_raining.svg";
var locationSunsetSunraise = "./Icons/sunset_sunraise.svg";

var currentDate;
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

var sunday;
var monday;
var tuesday;
var wednesday;
var thursday;
var friday;
var saturday;

var abbreviation_sunday;
var abbreviation_monday;
var abbreviation_tuesday;
var abbreviation_wednesday;
var abbreviation_thursday;
var abbreviation_friday;
var abbreviation_saturday;

var january;
var february;
var march;
var apil;
var may;
var june;
var july;
var august;
var september;
var october;
var november;
var december;

var date_pattern;
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

var en_sunday = "Sunday";
var en_monday = "Monday";
var en_tuesday = "Tuesday";
var en_wednesday = "Wednesday";
var en_thursday = "Thursday";
var en_friday = "Friday";
var en_saturday = "Saturday";

var en_abbreviation_sunday = "Sun";
var en_abbreviation_monday = "Mon";
var en_abbreviation_tuesday = "Tue";
var en_abbreviation_wednesday = "Wed";
var en_abbreviation_thursday = "Thu";
var en_abbreviation_friday = "Fri";
var en_abbreviation_saturday = "Sat";

var en_january = "January";
var en_february = "February";
var en_march = "March";
var en_april = "April";
var en_may = "May";
var en_june = "June";
var en_july = "July";
var en_august = "August";
var en_september = "September";
var en_october = "October";
var en_november = "November";
var en_december = "December";

var en_date_pattern = "-D-, -M- -N-, -Y-";
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

var de_sunday = "Sonntag";
var de_monday = "Montag";
var de_tuesday = "Dienstag";
var de_wednesday = "Mittwoch";
var de_thursday = "Donnerstag";
var de_friday = "Freitag";
var de_saturday = "Samstag";

var de_abbreviation_sunday = "So.";
var de_abbreviation_monday = "Mo.";
var de_abbreviation_tuesday = "Di.";
var de_abbreviation_wednesday = "Mi.";
var de_abbreviation_thursday = "Do.";
var de_abbreviation_friday = "Fr.";
var de_abbreviation_saturday = "Sa.";

var de_january = "Jänner";
var de_february = "Februar";
var de_march = "März";
var de_april = "April";
var de_may = "Mai";
var de_june = "Juni";
var de_july = "July";
var de_august = "August";
var de_september = "September";
var de_october = "Oktober";
var de_november = "November";
var de_december = "Dezember";

var de_date_pattern="-D-, -N-. -M-, -Y-";
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

            sunday = en_sunday;
            monday = en_monday;
            tuesday = en_tuesday;
            wednesday = en_wednesday;
            thursday = en_thursday;
            friday = en_friday;
            saturday = en_saturday;

            abbreviation_sunday = en_abbreviation_sunday;
            abbreviation_monday = en_abbreviation_monday;
            abbreviation_tuesday = en_abbreviation_tuesday;
            abbreviation_wednesday = en_abbreviation_wednesday;
            abbreviation_thursday = en_abbreviation_thursday;
            abbreviation_friday = en_abbreviation_friday;
            abbreviation_saturday = en_abbreviation_saturday;

            january = en_january;
            february = en_february;
            march = en_march;
            apil = en_april;
            may = en_may;
            june = en_june;
            july = en_july;
            august = en_august;
            september = en_september;
            october = en_october;
            november = en_november;
            december = en_december;
            
            date_pattern = en_date_pattern;
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

            sunday = de_sunday;
            monday = de_monday;
            tuesday = de_tuesday;
            wednesday = de_wednesday;
            thursday = de_thursday;
            friday = de_friday;
            saturday = de_saturday;

            abbreviation_sunday = de_abbreviation_sunday;
            abbreviation_monday = de_abbreviation_monday;
            abbreviation_tuesday = de_abbreviation_tuesday;
            abbreviation_wednesday = de_abbreviation_wednesday;
            abbreviation_thursday = de_abbreviation_thursday;
            abbreviation_friday = de_abbreviation_friday;
            abbreviation_saturday = de_abbreviation_saturday;

            january = de_january;
            february = de_february;
            march = de_march;
            apil = de_april;
            may = de_may;
            june = de_june;
            july = de_july;
            august = de_august;
            september = de_september;
            october = de_october;
            november = de_november;
            december = de_december;
            
            date_pattern = de_date_pattern;
            break;
    }
}

function main() {
    //call the clock function every second
    timerFunction();
    weatherFunction();
    dimensionsFunction();

    setInterval(timerFunction, delayTime)

    setInterval(weatherFunction, delayWeather);

    setInterval(dimensionsFunction, delayDimensions);
    //-audioElement = document.createElement('audio');
    //-audioElement.setAttribute('src', './Sounds/tick.wav');
    //-audioElement.play();



    /*
    $("#view_text_animation").fadeOut(0, function () {
        $("#view_text_animation").fadeIn(2000, function () {
            $("#view_text_animation").fadeOut(4000, null);
        });
    });*/



}

function dimensionsFunction() {
    width = $(window).width();
    height = $(window).height();
    $("#body").css("height", height);
    $("#body").css("width", width);
}


function weatherFunction() {
    $.simpleWeather({
        location: 'Linz',
        woeid: '',
        unit: 'c',
        success: function (weather) {

            var windspeed = parseFloat(weather.wind.speed);
            var sunrise = weather.sunrise;
            var sunset = weather.sunset;
            var suntime;
            if (parseInt(sunrise.split(" ")[0].split(":")[0]) > currentDate.getHours()) {
                suntime = sunrise.split(" ")[0];
            } else {
                suntime = parseInt(sunset.split(" ")[0].split(":")[0]) + 12 + ":" + sunset.split(" ")[0].split(":")[1];
            }

            var code = parseInt(weather.code);
            var useIcon = getLocationForWeatherCode(code);


            document.getElementById("current_temperature").innerHTML = "<img class='current_weather_image' src='" + useIcon + "'/>" + weather.temp + "°C";
            var additionalInfoToday = "<img src='" + locationIconWindy + "'/>" + windspeed + "<img src='" + locationSunsetSunraise + "'/>" + suntime;
            document.getElementById("weather_additional_info").innerHTML = additionalInfoToday;

            var weatherPreview = "";
            var count = 0;
            weather.forecast.forEach(function (element) {


                var iconLocation = getLocationForWeatherCode(parseInt(element.code));
                if (count < 5)
                    weatherPreview += "<tr><td>";
                else if (count == 5)
                    weatherPreview += "<tr style='opacity:0.9'><td>";
                else if (count == 6)
                    weatherPreview += "<tr style='opacity:0.7'><td>";
                else if (count == 7)
                    weatherPreview += "<tr style='opacity:0.6'><td>";
                else if (count == 8)
                    weatherPreview += "<tr style='opacity:0.4'><td>";
                else if (count == 9)
                    weatherPreview += "<tr style='opacity:0.2'><td>";


                if (count == 0)
                    weatherPreview += "Today";
                else if (count == 1)
                    weatherPreview += "Tomorrow";
                else {
                    var weekday;
                    if (currentDate.getDay() + count-1 > 5)
                        weekday = currentDate.getDay() + count-1 - 6;
                    else
                        weekday = currentDate.getDate() + count-1;

                    var days = [abbreviation_sunday, abbreviation_monday, abbreviation_tuesday, abbreviation_wednesday, abbreviation_thursday, abbreviation_friday, abbreviation_saturday];
                    weatherPreview+=days[weekday];
                }
                weatherPreview += "</td>";
                weatherPreview += "<td><img src='" + iconLocation + "'/></td>";
                weatherPreview += "<td>" + element.high + ".0</td>"
                weatherPreview += "<td>" + element.low + ".0</td></tr>"
                count++;

            });
            document.getElementById("weather_preview").innerHTML = weatherPreview;
        },
        error: function (error) {

            //-alert("Weather not avaiable!");
        }
    });
}

function getLocationForWeatherCode(code) {
    var useIcon;
    switch (code) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 23:
        case 24:
        case 37:
        case 38:
        case 39:
            useIcon = locationIconWindy;
            break;

        case 5:
        case 7:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 41:
        case 42:
        case 43:
        case 46:
        case 25:
            useIcon = locationIconSnowing;
            break;

        case 6:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 18:
        case 35:
        case 40:
        case 45:
        case 47:
            useIcon = locationIconRaining;
            break;

        case 19:
        case 20:
        case 21:
        case 22:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
        case 44:
            useIcon = locationIconCloudy;
            break;

        case 31:
        case 33:
            useIcon = locationIconClearNight;
            break;

        case 32:
        case 34:
        case 36:
            useIcon = locationIconSunny;
    }
    return useIcon;
}


function timerFunction() {
    currentDate = new Date();

    //set the optional '0' chars for the hour and the minute.
    var hourPuffer = currentDate.getHours() > 9 ? "" : "0";
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
            text = daytime_afternoon;
            break;
        case 20:
        case 21:
        case 22:
            text = daytime_evening;
    }


    //set the elements
    var days = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];
    var dayName = days[currentDate.getDay()];
    var months = [january, february, march, apil, may, june, july, august, september, october, november, december];
    var monthName = months[currentDate.getMonth()];
    
    var dateText = date_pattern;
    dateText = dateText.replace("-D-", dayName);
    dateText = dateText.replace("-M-", monthName);
    dateText = dateText.replace("-N-",currentDate.getDate());
    dateText = dateText.replace("-Y-",(currentDate.getYear() + 1900))
    
    document.getElementById("current_date").innerHTML = dayName + ", " + monthName + " " + currentDate.getDate() + ", " + (currentDate.getYear() + 1900);
    document.getElementById("current_date").innerHTML =dateText;
    
    document.getElementById("current_time").innerHTML = hourPuffer + currentDate.getHours() + ":" + minutePuffer + currentDate.getMinutes();
    document.getElementById("current_seconds").innerHTML = secondPuffer + currentDate.getSeconds();
    //document.getElementById("current_time_text").innerHTML = text;
}
