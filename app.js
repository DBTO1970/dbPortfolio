
// Time and Date

function makeDate(Date) {
    
    var month = Date.getMonth();
    if (month == 0) {
        month = "January";
    } else if (month == 1) {
        month = "February";
    } else if (month == 2) {
        month = "March";
    } else if (month == 3) {
        month = "April";
    } else if (month == 4) {
        month = "May";
    } else if (month == 5) {
        month = "June";
    } else if (month == 6) {
        month = "July";
    } else if (month == 7) {
        month = "August";
    } else if (month == 8) {
        month = "September";
    } else if (month == 9) {
        month = "October";
    } else if (month == 10) {
        month = "November";
    } else if (month == 11) {
        month = "December";
    } // to get Month in string format

    function makeTime(Date) {
       
        var minutes = Date.getMinutes();
        if (minutes < 10) {
            minutes = ("0") + minutes;
        } else {
            minutes = minutes;
        }
        

    }
    
    var date = month + ' ' + Date.getDate() + ', ' + Date.getFullYear() +
    "&nbsp;&nbsp;" + Date.getHours() + ":" + Date.getMinutes();
        
    document.getElementById("date-time").innerHTML = date;

    // call function again in 1 min
    setInterval(makeTime, 30000);
    
}
let today = new Date();
    
window.onload = makeDate(today);
