
const gYearInput = document.getElementById("gYear");
const gMonthInput = document.getElementById("gMonth");
const gDayInput = document.getElementById("gDay");
const convertBtn = document.getElementById("convertBtn");
const resultDiv = document.getElementById("result");

// Add event listener to the "Convert" button
convertBtn.addEventListener("click", () => {
    const gYear = Number(gYearInput.value);
    const gMonth = Number(gMonthInput.value) - 1; // JS Date object uses zero-indexed month
    const gDay = Number(gDayInput.value);

    // Convert the Gregorian date to Julian date
    const gDate = new Date(gYear, gMonth, gDay);
    const julianDate =
        Math.floor(gDate / 86400000) + 2440587.5 - (new Date().getTimezoneOffset() / 1440);

    // Convert the Julian date to Hindu Saka calendar
    const sakaYear = Math.floor((julianDate - 1867216.25) / 365.25) + 1;
    const sakaMonth = Math.floor((julianDate - 1867216.25 - (sakaYear - 1) * 365.25) / 30) + 1;
    const sakaDay = Math.floor(julianDate - 1867216.25 - (sakaYear - 1) * 365.25 - (sakaMonth - 1) * 30);

    // Display the result
    resultDiv.innerHTML = `Hindu Saka Date: ${sakaDay}/${sakaMonth}/${sakaYear}`;
});
