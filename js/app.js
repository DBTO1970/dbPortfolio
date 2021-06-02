
// Time and Date
// make new Date Object and use function to update time while on page
function updateTime() {    
    const today = new Date();
    var displayTime = today.toLocaleTimeString();
    var updateTimeDisplay = setInterval(dateTimeClock, 1000);
    
    function dateTimeClock() {
        var upDate = new Date();
        var displayTime = upDate.toLocaleTimeString();
        document.getElementById("date-time").innerHTML = today.toDateString() + "<br />" + displayTime;
    }
}
updateTime();

function thankYou() {
    window.open('thankYou.html');
    //confirm('Thank you for connecting!\nI will get back to you shortly.');
    //return false;
    
}
let submitBtn = document.getElementById('contact-form');
submitBtn.addEventListener('submit', thankYou);