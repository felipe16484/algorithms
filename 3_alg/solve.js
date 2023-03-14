function timeConversion(time) {
    // Write your code here
    var hours = parseInt(time.substr(0, 2));
    var minutes = time.substr(3, 2);
    var seconds = time.substr(6, 2);
    var suffix = time.substr(8, 2);

    if (hours === 12) {
        hours = 0;
    }

    if (suffix === "PM") {
        hours += 12;
    }

    return hours.toString().padStart(2, "0") + ":" + minutes + ":" + seconds;
}