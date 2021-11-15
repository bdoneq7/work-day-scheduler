// Display the Current Date with Moment.js
var currentDate = moment().format('dddd, MMMM Do, h:mm a');


$("#currentDay").html(currentDate);


$(document).ready(function () {

    // Button and Variable Function
    $(".saveBtn").on("click", function () {
        var enteredInput = $(this).siblings(".description").val();
        var hour = $(this).parent().attr("id");
        localStorage.setItem(hour, enteredInput);
    })
   
    // Track Hours Function
    function trackHours() {

        var currentTime = moment().hour();

        // Remove and Add Time Block Classes based on Hour
        $(".time-block").each(function () {
            var sectionHour = parseInt($(this).attr("id"));

            // If less than Current Time, Add Past Class
            if (sectionHour < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            // If equal to Current Time, Add Present Class
            else if (sectionHour === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            // If Greater, add Future Class
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Retrieve Values from Local Storage by ID 
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