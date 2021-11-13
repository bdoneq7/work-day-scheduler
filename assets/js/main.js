var currentDay = document.querySelector("#currentDay");

var currentTime = moment();
currentDay.textContent = currentTime.format("dddd, MMMM Do, h:mm a");

$("#task1").on("click", function() {
    
    var textTask1 = $(this)
    .text()
    .trim();

    var textInputTask1 = $("<textarea>")
    .addClass("textarea")
    .val(textTask1);
    $(this).replaceWith(textInputTask1);
    textInputTask1.trigger("focus");

  });

  $("#task2").on("click", function() {
    
    var textTask2 = $(this)
    .text()
    .trim();

    var textInputTask2 = $("<textarea>")
    .addClass("textarea")
    .val(textTask2);
    $(this).replaceWith(textInputTask2);
    textInputTask2.trigger("focus");

  });

  $("#task3").on("click", function() {
    
    var textTask3 = $(this)
    .text()
    .trim();

    var textInputTask3 = $("<textarea>")
    .addClass("textarea")
    .val(textTask3);
    $(this).replaceWith(textInputTask3);
    textInputTask3.trigger("focus");

  });

  $("#task4").on("click", function() {
    
    var textTask4 = $(this)
    .text()
    .trim();

    var textInputTask4 = $("<textarea>")
    .addClass("textarea")
    .val(textTask4);
    $(this).replaceWith(textInputTask4);
    textInputTask4.trigger("focus");

  });

  $("#task5").on("click", function() {
    
    var textTask5 = $(this)
    .text()
    .trim();

    var textInputTask5 = $("<textarea>")
    .addClass("textarea")
    .val(textTask5);
    $(this).replaceWith(textInputTask5);
    textInputTask5.trigger("focus");

  });

  $("#task6").on("click", function() {
    
    var textTask6 = $(this)
    .text()
    .trim();

    var textInputTask6 = $("<textarea>")
    .addClass("textarea")
    .val(textTask6);
    $(this).replaceWith(textInputTask6);
    textInputTask6.trigger("focus");

  });

  $("#task7").on("click", function() {
    
    var textTask7 = $(this)
    .text()
    .trim();

    var textInputTask7 = $("<textarea>")
    .addClass("textarea")
    .val(textTask7);
    $(this).replaceWith(textInputTask7);
    textInputTask7.trigger("focus");

  });

  $("#task8").on("click", function() {
    
    var textTask8 = $(this)
    .text()
    .trim();

    var textInputTask8 = $("<textarea>")
    .addClass("textarea")
    .val(textTask8);
    $(this).replaceWith(textInputTask8);
    textInputTask8.trigger("focus");

  });

  $("#task9").on("click", function() {
    
    var textTask9 = $(this)
    .text()
    .trim();

    var textInputTask9 = $("<textarea>")
    .addClass("textarea")
    .val(textTask9);
    $(this).replaceWith(textInputTask9);
    textInputTask9.trigger("focus");

  });