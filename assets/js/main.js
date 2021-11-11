var currentDay = document.querySelector("#currentDay");

var currentTime = moment();
currentDay.textContent = currentTime.format("dddd, MMMM Do");

