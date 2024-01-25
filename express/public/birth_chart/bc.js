function calculateAstrology() {
    const birthMonth = parseInt(document.zodiac.month.value);
    const birthDay = parseInt(document.zodiac.date.value);

    // Perform astrological calculations
    const sunSign = calculateSunSign(birthMonth, birthDay);
    const risingSign = calculateRisingSign();
    const moonSign = calculateMoonSign();

    // Display the results
    document.zodiac.sunSign.value = sunSign;
    document.zodiac.risingSign.value = risingSign;
    document.zodiac.moonSign.value = moonSign;
}
        
function calculateSunSign(month, day) {
    // Perform sun sign calculations
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    return "Aquarius";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    return "Pisces";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    return "Aries";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    return "Taurus";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
    return "Gemini";
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    return "Cancer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    return "Leo";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    return "Virgo";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
    return "Libra";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
    return "Scorpio";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    return "Sagittarius";
    } else if ((month == 12 && day >= 22) || (month == 12 && day <= 21)) {
    return "Capricorn";}
}

function calculateRisingSign() {
    return "Virgo Rising";
}

function calculateMoonSign() {
    return "Taurus moon";

}
        
function goToMatches() {
    window.location.href = "http://localhost:3000/matches/"
}
    

