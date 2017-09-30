function main() {
    var currentDate = new Date();
    document.getElementById("current_time").innerHTML = currentDate.getHours() + ":"+currentDate.getMinutes();
    
    var text= "";
    switch(currentDate.getHours()){
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
    }
    
    document.getElementById("current_time_text").innerHTML = text;
}