//region ENUMS
/**
 * Possible languages for internationalisation.
 * @type {{ENGLISH: number, GERMAN: number}}
 */
Languages = {
    ENGLISH: 0,
    GERMAN: 1
}

Units = {
    Celsius: 0,
    Farenheit: 1
}

/**
 * The existing views for switching views.
 * @type {{TEXT_ANIMATED: number, DEFAULT: number, OFF: number}}
 */
Views = {
    TEXT_ANIMATED: 0,
    DEFAULT: 1,
    OFF: 2
}

Functions = {
    DEFAULT: 0,
    SETTINGS: 1,
    GOOGLE_ACCOUNT: 2,
    EMAIL: 3,
    YOUTUBE: 4,
    WEATHER: 5,
    CALENDAR: 6
}

CalendarSettings = {
    PRIMARY: 6,
    CONTACTS: 1,
    EVENTS: 2,
    PRIMARY_CONTACTS: 3,
    PRIMARY_EVENTS: 4,
    CONTACTS_EVENTS: 5,
    ALL: 0
}
CalendarType = {
    PRIMARY: 0,
    CONTACTS: 1,
    EVENTS: 2
}
//endregion

//region Other fields

let audioElement;

let activeView = Views.DEFAULT;
let activeFunction = Functions.DEFAULT;

let activeCalendarSetting = CalendarSettings.ALL;

let setLanguage = Languages.ENGLISH;

let setUnit = Units.Celsius;

let signedIn = false;

//delays for different functions
let delayWeather = 900000; //every 15 minutes
let delayGoogleRefresh = 900000; //every 15 minutes
let delayTime = 1000; //every second
let delayDimensions = 1000; //every second

//icon locations
let locationIconSunny = "./Icons/weather_sunny.svg";
let locationIconWindy = "./Icons/weather_windy.svg";
let locationIconCloudy = "./Icons/weather_cloudy.svg";
let locationIconClearNight = "./Icons/weather_clear_night.svg";
let locationIconSnowing = "./Icons/weather_snowing.svg";
let locationIconRaining = "./Icons/weather_raining.svg";
let locationSunsetSunrise = "./Icons/sunset_sunrise.svg";

//the current date
let currentDate;
//endregion

//region Views in HTML format
let viewTextAnimated;
let viewDefault;
let viewOff;

let appEmailText;
let appSearchText;
let appYoutubeText;
let appCalendarText;

let googleAccountTitle;
let googleAccountName;
let googleAccountImage;

let onlyMirrorText;
let settingsText;

let onlyMirrorButton;
let settingsButton;
let backButton;

let appCalendarButton;

let calendarBackButton;
let calendarForwardButton;

let calendarBackText;
let calendarForwardText;

let calendarCurrentMonth;

let clickAudio;
//endregion

//region Fields for using the smart-mirror in multiple languages
//region The fields which are actually used in the code
let daytime_night;
let daytime_morning;
let daytime_noon;
let daytime_afternoon;
let daytime_evening;

let greeting_night;
let greeting_morning;
let greeting_noon;
let greeting_afternoon;
let greeting_evening;

let sunday;
let monday;
let tuesday;
let wednesday;
let thursday;
let friday;
let saturday;

let abbreviation_sunday;
let abbreviation_monday;
let abbreviation_tuesday;
let abbreviation_wednesday;
let abbreviation_thursday;
let abbreviation_friday;
let abbreviation_saturday;

let january;
let february;
let march;
let apil;
let may;
let june;
let july;
let august;
let september;
let october;
let november;
let december;

let greeting_startup;

let date_pattern;
let upcoming_events_soon_pattern;

let app_search;
let app_email;
let app_youtube;
let app_calendar;

let google_account;
let settings;
let only_mirror;
//endregion

//region ENGLISH: prefix is "en"
let en_daytime_night = "In the night";
let en_daytime_morning = "In the morning";
let en_daytime_noon = "In the noon";
let en_daytime_afternoon = "In the afternoon";
let en_daytime_evening = "In the evening";

let en_greeting_night = "Good night!";
let en_greeting_morning = "Good morning!";
let en_greeting_noon = "Good noon!";
let en_greeting_afternoon = "Good afternoon!";
let en_greeting_evening = "Good evening!";

let en_sunday = "Sunday";
let en_monday = "Monday";
let en_tuesday = "Tuesday";
let en_wednesday = "Wednesday";
let en_thursday = "Thursday";
let en_friday = "Friday";
let en_saturday = "Saturday";

let en_abbreviation_sunday = "Sun";
let en_abbreviation_monday = "Mon";
let en_abbreviation_tuesday = "Tue";
let en_abbreviation_wednesday = "Wed";
let en_abbreviation_thursday = "Thu";
let en_abbreviation_friday = "Fri";
let en_abbreviation_saturday = "Sat";

let en_january = "January";
let en_february = "February";
let en_march = "March";
let en_april = "April";
let en_may = "May";
let en_june = "June";
let en_july = "July";
let en_august = "August";
let en_september = "September";
let en_october = "October";
let en_november = "November";
let en_december = "December";

let en_greeting_startup = "Welcome to Smart-Mirror!";

let en_date_pattern = "-D-, -M- -N-, -Y-";
let en_upcoming_events_soon_pattern = "in -A- days";

let en_app_search = "Search";
let en_app_email = "EMail";
let en_app_youtube = "YouTube"
let en_app_calendar = "Calendar";

let de_google_account = "Google Account";
let en_settings = "Settings";
let en_only_mirror = "Only Mirror";
//endregion

//region GERMAN: prefix is "de"
let de_daytime_night = "In der Nacht";
let de_daytime_morning = "Am Morgen";
let de_daytime_noon = "Zu Mittag";
let de_daytime_afternoon = "Am Nachmittag";
let de_daytime_evening = "Am Abend";

let de_greeting_night = "Gute Nacht!";
let de_greeting_morning = "Guten Morgen!";
let de_greeting_noon = "Schönen Mittag!";
let de_greeting_afternoon = "Schönen Nachmittag!";
let de_greeting_evening = "Guten Abend!";

let de_sunday = "Sonntag";
let de_monday = "Montag";
let de_tuesday = "Dienstag";
let de_wednesday = "Mittwoch";
let de_thursday = "Donnerstag";
let de_friday = "Freitag";
let de_saturday = "Samstag";

let de_abbreviation_sunday = "So.";
let de_abbreviation_monday = "Mo.";
let de_abbreviation_tuesday = "Di.";
let de_abbreviation_wednesday = "Mi.";
let de_abbreviation_thursday = "Do.";
let de_abbreviation_friday = "Fr.";
let de_abbreviation_saturday = "Sa.";

let de_january = "Jänner";
let de_february = "Februar";
let de_march = "März";
let de_april = "April";
let de_may = "Mai";
let de_june = "Juni";
let de_july = "July";
let de_august = "August";
let de_september = "September";
let de_october = "Oktober";
let de_november = "November";
let de_december = "Dezember";

let de_greeting_startup = "Willkommen zu Smart-Mirror!";

let de_date_pattern = "-D-, -N-. -M-, -Y-";
let de_upcoming_events_soon_pattern = "in -A- Tagen";

let de_app_search = "Suche";
let de_app_email = "EMail";
let de_app_youtube = "YouTube";
let de_app_calendar = "Kalender";

let en_google_account = "Google Account";
let de_settings = "Einstellungen";
let de_only_mirror = "Nur Spiegel";
//endregion
//endregion

//region Startup components
$(document).ready(function () {
    setLanguages();
    main();
});

/**
 * Sets the used language letiables to the active language letiables.
 */
function setLanguages() {
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

            greeting_startup = en_greeting_startup;

            date_pattern = en_date_pattern;
            upcoming_events_soon_pattern = en_upcoming_events_soon_pattern;

            app_search = en_app_search;
            app_email = en_app_email;
            app_youtube = en_app_youtube;
            app_calendar = en_app_calendar;

            google_account = en_google_account;
            settings = en_settings;
            only_mirror = en_only_mirror;
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

            greeting_startup = de_greeting_startup;

            date_pattern = de_date_pattern;
            upcoming_events_soon_pattern = de_upcoming_events_soon_pattern;

            app_search = de_app_search;
            app_email = de_app_email;
            app_youtube = de_app_youtube;
            app_calendar = de_app_calendar;

            google_account = de_google_account;
            settings = de_settings;
            only_mirror = de_only_mirror;
            break;
    }
}


function loadHTMLElements() {
    viewTextAnimated = $("#view_text_animation");
    viewDefault = $("#view_default");
    viewOff = $("#view_off");

    appEmailText = $("#app_email_text");
    appSearchText = $("#app_search_text");
    appYoutubeText = $("#app_youtube_text");
    appCalendarText = $("#app_calendar_text");

    googleAccountImage = $("#google_account_image");
    googleAccountName = $("#google_account_name");
    googleAccountTitle = $("#google_account_title");

    onlyMirrorText = $("#only_mirror_text");
    settingsText = $("#settings_text");

    onlyMirrorButton = $("#button_only_mirror");
    settingsButton = $("#button_settings");

    backButton = $("#button_back");

    appCalendarButton = $("#button_app_calendar");

    calendarBackButton = $("#calendar_back_button");
    calendarForwardButton = $("#calendar_forward_button");
    calendarBackText = $("#calendar_back_text");
    calendarForwardText = $("#calendar_forward_text");
    calendarCurrentMonth = $("#calendar_current_month");
}

function setTextToHTML() {
    onlyMirrorText.html(only_mirror);
    settingsText.html(settings);

    googleAccountTitle.html(google_account);

    appSearchText.html(app_search);
    appEmailText.html(app_email);
    appYoutubeText.html(app_youtube);
    appCalendarText.html(app_calendar);
}

/**
 * The initializing function which is called when the document is ready.
 * The function sets up the periodical function and sets events.
 */
function main() {
    loadHTMLElements();
    setTextToHTML();

    viewTextAnimated.fadeOut(0, null);
    viewDefault.fadeOut(0, null);
    viewOff.fadeOut(0, null);
    backButton.fadeOut(0, null);

    loadNews();
    loadQuote();

    switchView(Views.DEFAULT);

    //call periodic functions the first time
    timerFunction();
    weatherFunction();
    dimensionsFunction();


    //set regular intervals for periodic functions
    setInterval(timerFunction, delayTime);
    setInterval(weatherFunction, delayWeather);
    setInterval(dimensionsFunction, delayDimensions);

    //Startup procedure
    showViewTextAnimated([greeting_startup]);
    let audioElement = document.createElement('audio');
    audioElement.setAttribute('src', './Sounds/startup.ogg');
    audioElement.play();

    clickAudio = document.createElement('audio');
    clickAudio.setAttribute('src', './Sounds/touch.mp3');



    //The click event when the google button is clicked.
    $("#google_account").click(function () {
        clickAudio.play();
        if (signedIn)
            gapi.auth2.getAuthInstance().signOut();
        gapi.auth2.getAuthInstance().signIn({
            ux_mode: "popup",
            prompt: "select_account"
        });
    });

    onlyMirrorButton.click(function () {
        clickAudio.play();
        switchView(Views.OFF);
        showViewTextAnimated(["Bye bye"]);
    });
    settingsButton.click(function () {
        clickAudio.play();
        switchFunction(Functions.SETTINGS);
    });

    viewOff.click(function () {
        clickAudio.play();
        switchView(Views.DEFAULT);
    });

    let clickCalendarFunction = function () {
        clickAudio.play();
        switchFunction(Functions.CALENDAR);
    };
    $("#upcoming_events").click(clickCalendarFunction);
    appCalendarButton.click(clickCalendarFunction);

    backButton.click(function () {
        clickAudio.play();
        switchFunction(Functions.DEFAULT);
    });

    currentYear = currentDate.getYear();
    currentMonth = currentDate.getMonth();
    calendarBackButton.click(function () {
        clickAudio.play();
        currentMonth = (currentMonth + 12 - 1) % 12;
        if (currentMonth == 11)
            currentYear -= 1;
        refreshCalendarEntryData();
    });
    calendarForwardButton.click(function () {
        clickAudio.play();
        currentMonth = (currentMonth + 1) % 12;
        if (currentMonth == 0)
            currentYear += 1;
        refreshCalendarEntryData();
    });

}
//endregion

/**
 * This periodical function sets the dimensions of the body regulary to the width and height of the window.
 * This is needed to improve the design.
 */
function dimensionsFunction() {
    width = $(window).width();
    height = $(window).height();
    $("#body").css("height", height);
    $("#body").css("width", width);
}

/**
 * This periodical function refreshes the weather data in requesting the data with the "simpleweather" libary.
 */
function weatherFunction() {
    $.simpleWeather({
        location: 'Linz',
        woeid: '',
        unit: 'c',
        success: function (weather) {

            let sunrise = parseSpecialTimeToDate(weather.sunrise);
            let sunset = parseSpecialTimeToDate(weather.sunset);


            let closerEvent;
            if (getTimeTo(sunrise) < getTimeTo(sunset)) {
                closerEvent = sunrise;
            } else {
                closerEvent = sunset;
            }
            let windspeed = parseFloat(weather.wind.speed);
            let useIcon = getLocationForWeatherCode(parseInt(weather.code));

            //Set the optional '0' chars for the hour and minute.
            let hourPuffer = closerEvent.getHours() < 10 ? "0" : "";
            let minutePuffer = closerEvent.getMinutes() < 10 ? "0" : "";

            //Create HTML text.
            let temperatureText;
            if (setUnit === Units.Celsius)
                temperatureText = weather.temp + "°C";
            else if (setUnit === Units.Farenheit)
                temperatureText = Math.round(weather.temp * 1.8 + 32) + "°F";
            let currentTemperatureContent = "<img class='current_weather_image' src='" + useIcon + "'/>" + temperatureText;
            let currentAdditionalWeatherInfo = "<img src='" + locationIconWindy + "'/>" + windspeed + "<img src='" + locationSunsetSunrise + "'/>" + hourPuffer + closerEvent.getHours() + ":" + minutePuffer + closerEvent.getMinutes();

            //The table content for the weather preview
            let weatherPreview = "";
            let count = 0;
            let days = [abbreviation_sunday, abbreviation_monday, abbreviation_tuesday, abbreviation_wednesday, abbreviation_thursday, abbreviation_friday, abbreviation_saturday];

            weather.forecast.forEach(function (element) {
                //Get the right image for the weather situation
                let iconLocation = getLocationForWeatherCode(parseInt(element.code));

                //The opacity is reduced the later the date is.
                if (count < 5)
                    weatherPreview += "<tr><td>";
                else if (count === 5)
                    weatherPreview += "<tr style='opacity:0.9'><td>";
                else if (count === 6)
                    weatherPreview += "<tr style='opacity:0.7'><td>";
                else if (count === 7)
                    weatherPreview += "<tr style='opacity:0.6'><td>";
                else if (count === 8)
                    weatherPreview += "<tr style='opacity:0.4'><td>";
                else if (count === 9)
                    weatherPreview += "<tr style='opacity:0.2'><td>";
                let weekday;
                weekday = (currentDate.getDay() + count) % 7;
                weatherPreview += days[weekday];


                let high;
                let low;
                if (setUnit == Units.Celsius) {
                    high = element.high;
                    low = element.low;
                } else if (setUnit == Units.Farenheit) {
                    high = Math.round(element.high * 1.8 + 32);
                    low = Math.round(element.low * 1.8 + 32);
                }

                weatherPreview += "</td>";
                weatherPreview += "<td><img src='" + iconLocation + "'/></td>";
                weatherPreview += "<td>" + high + ".0</td>"
                weatherPreview += "<td>" + low + ".0</td></tr>"
                count++;

            });
            //Set Data in HTML.
            $("#current_temperature").html(currentTemperatureContent);
            $("#weather_additional_info").html(currentAdditionalWeatherInfo);
            $("#weather_preview").html(weatherPreview);
        },
        error: function (error) {
            //-alert("Weather not avaiable!");
        }
    });
}

/**
 * This function can parse Date in Format "10:2 PM" to Date format and calculates it from the current Date.
 */
function parseSpecialTimeToDate(specialTime) {
    //Split the Time elements and calculate the PM or AM.
    let elements = specialTime.split(" ");
    let timeElements = elements[0].split(":");
    let hour = parseInt(timeElements[0]);
    let minute = parseInt(timeElements[1]);
    if (elements[1] === "pm")
        hour += 12;

    //Set the newDate to the currentDate and set the right hours and minutes.
    let newDate;
    if (hour >= currentDate.getHours())
        newDate = new Date(currentDate.getTime());
    else
        newDate = new Date(currentDate.getTime() + 86400000);
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    return newDate;
}

/**
 * Calculates how much time is between now and the given time.
 */
function getTimeTo(date) {
    return date.getTime() - currentDate.getTime();
}

/**
 * This function returns the image location for the weather code.
 * The weather code is set by: https://developer.yahoo.com/weather/documentation.html#codes
 */
function getLocationForWeatherCode(code) {
    let useIcon;
    switch (code) {
        case 0: //tornado
        case 1: //tropical storm
        case 2: //hurricane
        case 3: //severe thunderstorms
        case 4: //thunderstorms
        case 23: //blustery
        case 24: //windy
        case 37: //isolated thunderstorms
        case 38: //scattered thunderstorms
        case 39: //scattered thunderstorms
            useIcon = locationIconWindy;
            break;

        case 5: //mixed rain and snow
        case 7: //mixed snow and sleet
        case 13: //snow flurries
        case 14: //light snow showers
        case 15: //blowing snow
        case 16: //snow
        case 17: //hail
        case 25: //cold
        case 41: //heavy snow
        case 42: //scattered snow showers
        case 43: //heavy snow
        case 46: //snow showers
            useIcon = locationIconSnowing;
            break;

        case 6: //mixed rain and sleet
        case 8: //freezing drizzle
        case 9: //drizzle
        case 10: //freezing rain
        case 11: //showers
        case 12: //showers
        case 18: //sleet
        case 35: //mixed rain and hail
        case 40: //scattered showers
        case 45: //thundershowers
        case 47: //isolated thundershowers
            useIcon = locationIconRaining;
            break;

        case 19: //dust
        case 20: //foggy
        case 21: //haze
        case 22: //smoky
        case 26: //cloudy
        case 27: //mostly cloudy (night)
        case 28: //mostly cloudy (day)
        case 29: //partly cloudy (night)
        case 30: //partly cloudy (day)
        case 44: //partly cloudy
            useIcon = locationIconCloudy;
            break;

        case 31: //clear (night)
        case 33: //fair (night)
            useIcon = locationIconClearNight;
            break;

        case 32: //sunny
        case 34: //fair (day)
        case 36: //hot
            useIcon = locationIconSunny;
    }
    return useIcon;
}

/**
 * This periodical function refreshes the clock and the date.
 */
function timerFunction() {
    //Set the currentDate variable to the current date.
    currentDate = new Date();

    //Set the optional '0' chars for the hour, minute and the second.
    let hourPuffer = currentDate.getHours() > 9 ? "" : "0";
    let minutePuffer = currentDate.getMinutes() > 9 ? "" : "0";
    let secondPuffer = currentDate.getSeconds() > 9 ? "" : "0";

    let timeText = hourPuffer + currentDate.getHours() + ":" + minutePuffer + currentDate.getMinutes();
    let secondText = secondPuffer + currentDate.getSeconds();

    //Set the daytime text depended on the hour of the day.
    let text = "";
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
    let days = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];
    let dayName = days[currentDate.getDay()];
    let months = [january, february, march, apil, may, june, july, august, september, october, november, december];
    let monthName = months[currentDate.getMonth()];

    //Inject the data into the language specific date pattern.
    let dateText = date_pattern;
    dateText = dateText.replace("-D-", dayName);
    dateText = dateText.replace("-M-", monthName);
    dateText = dateText.replace("-N-", currentDate.getDate());
    dateText = dateText.replace("-Y-", (currentDate.getYear() + 1900))

    //Set the HTML.
    $("#current_date").html(dateText);
    $("#current_time").html(timeText);
    $("#current_seconds").html(secondText);
}


//region Switch views in HTML

/**
 * This function shows all elements in a string-array with animations on the viewTextAnimated and is recursive.
 */
function showViewTextAnimated(text) {
    getViewForViewId(activeView).fadeOut(0, null);
    if (text.length === 0) {
        getViewForViewId(activeView).fadeIn(0, null);
    } else {
        let word = text[0];
        $("#text_animation").html(word);
        viewTextAnimated.fadeIn(2000, function () {
            viewTextAnimated.fadeOut(4000, function () {
                showViewTextAnimated(text.slice(1, text.length));
            });
        });
    }
}

/**
 * Changes the active view to the give view.
 * @param view
 */
function switchView(viewId) {
    getViewForViewId(activeView).fadeOut(0, null);
    activeView = viewId;
    switch (activeView) {
        case Views.DEFAULT:
            viewDefault.fadeIn(0, null);
            break;
        case Views.OFF:
            viewOff.fadeIn(0, null);
            break;
    }
}

/**
 * Determines the view for the view id.
 * @param id
 * @returns {*}
 */
function getViewForViewId(id) {
    switch (id) {
        case Views.DEFAULT:
            return viewDefault;
        case Views.OFF:
            return viewOff;
    }
}

//endregion

//region Switch functions in HTML
function switchFunction(functionId) {
    getFunctionForFunctionId(activeFunction).fadeOut(0, null);
    activeFunction = functionId;
    switch (activeFunction) {
        case Functions.DEFAULT:
            $("#apps_table").fadeIn(0, null);
            $("#upcoming_events").fadeIn(0, null);
            $("#weather_preview").fadeIn(0, null);
            backButton.fadeOut(0, null);
            break;
        case Functions.SETTINGS:
            $("#settings_function").fadeIn(0,null);
            $("#upcoming_events").fadeOut(0, null);
            $("#weather_preview").fadeOut(0, null);
            backButton.fadeIn(0, null);
            break;
        case Functions.CALENDAR:
            $("#calendar_function").fadeIn(0, null);
            $("#upcoming_events").fadeOut(0, null);
            $("#weather_preview").fadeOut(0, null);
            backButton.fadeIn(0, null);
        case Functions.GOOGLE_ACCOUNT:
            break;
        case Functions.WEATHER:
            break;
        case Functions.YOUTUBE:
            break;
        case Functions.EMAIL:
            break;
    }
}

function getFunctionForFunctionId(id) {
    switch (id) {
        case Functions.DEFAULT:
            return $("#apps_table");
        case Functions.SETTINGS:
            return $("#settings_function");
        case Functions.CALENDAR:
            return $("#calendar_function");
        case Functions.EMAIL:
            return null;
        case Functions.GOOGLE_ACCOUNT:
            return null;
        case Functions.WEATHER:
            return null;
        case Functions.YOUTUBE:
            return null;
    }
}
//endregion

//Objects for the loaded data from the APIs
let quote;

//Lists for the loaded data from the APIs
let calendarEntries = [];
let eMails = [];
let news = [];

//region Refresh HTML elements in the UI
function refreshGMailData() {

}


let currentMonth;
let currentYear;
/**
 * Builds a string in HTML format and sets the content of the table specified in the HTML code to this string.
 * The string contains the last 10 calendar entries.
 */
function refreshCalendarEntryData() {
    calendarEntries.sort(function (a, b) {
        return a.datetime.getTime() - b.datetime.getTime();
    });

    let day = currentDate.getDate();
    let monthDate = new Date();
    monthDate.setMonth(currentMonth);
    monthDate.setFullYear(currentYear + 1900);
    monthDate.setDate(0);
    monthDate.setHours(0);
    monthDate.setSeconds(0);
    monthDate.setMinutes(0);
    monthDate.setMilliseconds(0);
    let oneDayMillis = 86400000;
    let i;
    let e;
    let tableString = "";
    let days = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];
    let months = [january, february, march, apil, may, june, july, august, september, october, november, december];
    tableString += "<tr>";
    for (i = 0; i < 7; i++) {
        tableString += "<td style='height:50px; text-align:center'>" + days[i] + "</td>";
    }
    tableString += "</tr>";
    while (monthDate.getDay() != 1) {
        monthDate.setTime(monthDate.getTime() - oneDayMillis);
    }
    let listIndex = 0;
    calendarCurrentMonth.html(months[currentMonth] + " " + (currentYear + 1900));
    calendarBackText.html(months[(currentMonth + 12 - 1) % 12] + " " + (currentYear + 1900));
    calendarForwardText.html(months[(currentMonth + 1) % 12] + " " + (currentYear + 1900));

    while (monthDate.getMonth() == currentMonth || monthDate.getMonth() == (currentMonth + 12 - 1) % 12) {
        tableString += "<tr>"
        for (e = 0; e < 7; e++) {
            let color;
            if (monthDate.getDate() == currentDate.getDate() && monthDate.getMonth() == currentDate.getMonth() &&currentMonth == currentDate.getMonth() && currentYear == currentDate.getYear())
                color = "#444";
            else
                color = "#222";
            tableString += "<td style='background-color:" + color + ";vertical-align:top;'><div><p style='display:block'>" + monthDate.getDate() + "</p>";
            while (calendarEntries[listIndex].datetime.getTime() < monthDate.getTime() && listIndex < calendarEntries.length) {
                listIndex++;
            }
            while (calendarEntries[listIndex].datetime.getTime() < monthDate.getTime() + oneDayMillis && listIndex < calendarEntries.length) {
                tableString += "<p>" + calendarEntries[listIndex].title + "</p>";
                listIndex++;
            }


            monthDate.setTime(monthDate.getTime() + oneDayMillis);
            tableString += "</div></td>"
        }
        tableString += "</tr>";
    }
    $("#calendar").html(tableString);

    let upcomingEvents = "";
    let count = 0;

    calendarEntries.forEach(function (element) {
        //The opacity is reduced the later the event is.
        if (count < 10) {
            if (element.calendarType == CalendarType.PRIMARY && (activeCalendarSetting == CalendarSettings.ALL || activeCalendarSetting == CalendarSettings.PRIMARY_CONTACTS || activeCalendarSetting == CalendarSettings.PRIMARY || activeCalendarSetting == CalendarSettings.PRIMARY_EVENTS) || element.calendarType == CalendarType.EVENTS && (activeCalendarSetting == CalendarSettings.ALL || activeCalendarSetting == CalendarSettings.PRIMARY_EVENTS || activeCalendarSetting == CalendarSettings.EVENTS || activeCalendarSetting == CalendarSettings.CONTACTS_EVENTS) || element.calendarType == CalendarType.CONTACTS && (activeCalendarSetting == CalendarSettings.ALL || activeCalendarSetting == CalendarSettings.PRIMARY_CONTACTS || activeCalendarSetting == CalendarSettings.CONTACTS_EVENTS || activeCalendarSetting == CalendarSettings.CONTACTS)) {
                let daysTo = Math.round(getTimeTo(element.datetime) / (1000 * 60 * 60 * 24));
                if (daysTo >= 0) {


                    if (count < 5)
                        upcomingEvents += "<tr><td>";
                    else if (count === 5)
                        upcomingEvents += "<tr style='opacity:0.9'><td>";
                    else if (count === 6)
                        upcomingEvents += "<tr style='opacity:0.7'><td>";
                    else if (count === 7)
                        upcomingEvents += "<tr style='opacity:0.6'><td>";
                    else if (count === 8)
                        upcomingEvents += "<tr style='opacity:0.4'><td>";
                    else if (count === 9)
                        upcomingEvents += "<tr style='opacity:0.2'><td>";

                    if (element.title.length >= 25)
                        upcomingEvents += element.title.substr(0, 25) + "...";
                    else
                        upcomingEvents += element.title;

                    upcomingEvents += "</td><td>";


                    if (daysTo === 0)
                        upcomingEvents += "Today";
                    else if (daysTo <= 7)
                        upcomingEvents += upcoming_events_soon_pattern.replace("-A-", daysTo);
                    else {
                        let datetime = element.datetime;

                        let date;
                        let month;
                        if (datetime.getDate() <= 9)
                            date = "0" + datetime.getDate();
                        else
                            date = datetime.getDate();
                        //month + 1 because January is 0 and not 1 (array)
                        if ((datetime.getMonth() + 1) <= 9)
                            month = "0" + (datetime.getMonth() + 1);
                        else
                            month = datetime.getMonth() + 1;

                        //year + 1900 because it counts from 0 as 1900.
                        upcomingEvents += date + "." + month + "." + (1900 + datetime.getYear());
                    }
                    upcomingEvents += "</td></tr>";
                    count++;
                }
            }
        }
    });
    $("#upcoming_events").html(upcomingEvents);
}

function refreshNews() {

}

//endregion

//region Load Data from APIs

//region The API calls to quotesondesign.com for quotes
/**
 * Load a random quote and save it.
 */
function loadQuote() {
    $.ajax({
        url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand",
        success: function (data) {
            quote = new Quote(data[0].content, data[0].title);
        },
        error: function (data) {

        }
    });
}

//endregion

//region The API calls to newsapi.org for news
let NEWS_API_KEY = "7690807f99fc4759b17f8c6d404c2867";

/**
 * First load the types of sources for german language.
 * Then load articles for the loaded sources and add them to the news list.
 */
function loadNews() {
    news = [];
    $.ajax({
        url: "https://newsapi.org/v1/sources?language=DE&apiKey=" + NEWS_API_KEY,
        success: function (data) {
            data.sources.forEach(function (source) {
                $.ajax({
                    url: "https://newsapi.org/v1/articles?source=" + source.id + "&sortBy=top&apiKey=" + NEWS_API_KEY,
                    success: function (data) {
                        data.articles.forEach(function (article) {
                            news.push(new News(article.title, article.description, article.author, article.publishedAt, article.url, source.id));
                        });
                    },
                    error: function (data) {

                    }
                });
            });
        }
    });
}

//endregion

//region The API calls to google APIs for google account-data

/**
 * Gets called as soon as the page is ready and initializes the google api connections.
 */
function handleClientLoad() {
    gapi.load('client:auth2', initAuthentication);
}

//The CLIENT_ID is needed to connect to the google APIs. Visit at console.cloud.google.com.
let CLIENT_ID = "1094965716521-t47je6shvn0la4s3h57e2vflaflodgul.apps.googleusercontent.com";
//Array of API discovery doc URLs for APIs used in this script.
let DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest", "https://people.googleapis.com/$discovery/rest", "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];
//Authorization scopes required by the API.
let SCOPES = "https://www.googleapis.com/auth/calendar profile https://www.googleapis.com/auth/gmail.readonly";


/**
 * Gets called to initialize the connection with the google CLIENT_ID.
 */
function initAuthentication() {
    gapi.client.init({
        discoveryDocs: DISCOVERY_DOCS,
        clientId: CLIENT_ID,
        scope: SCOPES
    }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);


        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
}

/**
 * Get called when the sign in status of the google account changes.
 * @param isSignedIn
 */
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        signedIn = true;
        loadCalendarEntries();
        loadProfileData();
        loadGMailData();
    } else {
        calendarEntries = [];
        eMails = [];
        signedIn = false;
    }
}

/**
 * Load the 10 closest emails from the active google account and add them to the eMails list.
 */
function loadGMailData() {
    gapi.client.gmail.users.messages.list({
        'userId': "me",
        'maxResults': 10
    }).then(function (response) {
        response.result.messages.forEach(function (message) {
            gapi.client.gmail.users.messages.get({
                'userId': "me",
                'id': message.id
            }).then(function (resp) {
                eMails.push(new EMail(message.id, resp.result.snippet, resp.result.internalDate));
            });
        });
    });
}

/**
 * Load The profile data of the current google account.
 */
function loadProfileData() {
    gapi.client.people.people.get({
        'resourceName': 'people/me',
        'requestMask.includeField': ['person.names', 'person.photos']
    }).then(function (response) {
        $("#google_account_name").html(response.result.names[0].displayName);
        $("#google_account_image").css("background-image", "URL(" + response.result.photos[0].url + ")");
    });
}

/**
 *Load the 10 closest calendar entry from the active google account and add them to the calendarEntries list.
 */
function loadCalendarEntries() {
    calendarEntries = [];
    gapi.client.calendar.events.list({
        'calendarId': 'primary',
        'showDeleted': false,
        'singleEvents': true,
        'orderBy': 'startTime'
    }).then(function (response) {
        let events = response.result.items;

        events.forEach(function (event) {
            let datetime = event.start.dateTime;
            if (!datetime)
                datetime = event.start.date;
            let title = event.summary;
            calendarEntries.push(new CalendarEntry(title, datetime, CalendarType.PRIMARY));
        });
        refreshCalendarEntryData();
    });
    gapi.client.calendar.events.list({
        'calendarId': '#contacts@group.v.calendar.google.com',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
    }).then(function (response) {
        let events = response.result.items;

        events.forEach(function (event) {
            let datetime = event.start.dateTime;
            if (!datetime)
                datetime = event.start.date;
            let title = event.summary;
            calendarEntries.push(new CalendarEntry(title, datetime, CalendarType.CONTACTS));
        });
        refreshCalendarEntryData();
    });
    gapi.client.calendar.events.list({
        'calendarId': 'de.austrian#holiday@group.v.calendar.google.com',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
    }).then(function (response) {
        let events = response.result.items;

        events.forEach(function (event) {
            let datetime = event.start.dateTime;
            if (!datetime)
                datetime = event.start.date;
            let title = event.summary;
            calendarEntries.push(new CalendarEntry(title, datetime, CalendarType.EVENTS));
        });
        refreshCalendarEntryData();
    });
}

//endregion
//endregion

//region Classes for API elements
/**
 * One calendar entry with the needed data.
 */
class CalendarEntry {
    constructor(title, datetime, calendarType) {
        this.title = title;
        this.datetime = new Date(datetime);
        this.calendarType = calendarType;
    }
}

/**
 * One email with the needed data.
 */
class EMail {
    constructor(id, subject, utcTime) {
        this.id = id;
        this.subject = subject;
        let date = new Date(0);
        date.setUTCSeconds(utcTime / 1000);
        this.datetime = date;
    }
}

/**
 * One News with the needed data. The url is the URL to the official site.
 */
class News {
    constructor(title, description, author, releaseDate, url, source) {
        this.title = title;
        this.description = description;
        this.author = author;
        this.releaseDate = new Date(releaseDate);
        this.url = url;
        this.source = source;
    }
}

/**
 * The quote with the needed data.
 */
class Quote {
    constructor(quote, author) {
        this.quote = quote;
        this.author = author;
    }
}

//endregion
