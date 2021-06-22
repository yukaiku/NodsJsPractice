function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - parseDate(birthday).getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    // return parseDate(birthday).getTime();
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function parseDate(input) {
    var parts = input.match(/(\d+)/g);
    // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
}

module.exports = calculateAge;