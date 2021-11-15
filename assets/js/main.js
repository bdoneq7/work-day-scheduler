// Display the Current Date with Moment.js
var currentDate = moment().format('dddd, MMMM Do, h:mm a');


$("#currentDay").html(currentDate);

$(document).ready(function () {

    // Save Button and Variables
    $(".saveBtn").on("click", function () {

        var enteredInput = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, enteredInput);
    })
   
    function trackHours() {

        // Obtain current Hour
        var currentTime = moment().hour();

        // Remove and Add Classes based on Hour
        $(".time-block").each(function () {
            var sectionHour = parseInt($(this).attr("id"));

            if (sectionHour < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (sectionHour === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get Values from Local Storage by ID a
    $("#9am .description")
    .val(localStorage.getItem("9am"));

    $("#10am .description")
    .val(localStorage.getItem("10am"));

    $("#11am .description")
    .val(localStorage.getItem("11am"));

    $("#12pm .description")
    .val(localStorage.getItem("12pm"));

    $("#1pm .description")
    .val(localStorage.getItem("1pm"));

    $("#2pm .description")
    .val(localStorage.getItem("2pm"));

    $("#3pm .description")
    .val(localStorage.getItem("3pm"));

    $("#4pm .description")
    .val(localStorage.getItem("4pm"));

    $("#5pm .description")
    .val(localStorage.getItem("5pm"));

    trackHours();
})