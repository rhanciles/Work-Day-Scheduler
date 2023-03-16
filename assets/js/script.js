
// Apply current date to header.
var currentDate = moment().format("dddd Do MMMM YYYY"); 
$('#currentDay').text(currentDate);

// Set current time to update dynamically
var update = function() {
    var currentTime = moment().format("LTS"); 
    $('#currentTime').text(currentTime);
    setTimeout(update, 1000);
    // setInterval or setTimeout can be used.
}
update();

// JSON.parse(localStorage.getItem("details")) || [];
// console.log(cityRecall);
// var details = localStorage.getItem('details');

var details0 = localStorage.getItem('details0');
var details1 = localStorage.getItem('details1');
var details2 = localStorage.getItem('details3');
var details3 = localStorage.getItem('details3');
var details4 = localStorage.getItem('details4');
var details5 = localStorage.getItem('details5');
var details6 = localStorage.getItem('details6');
var details7 = localStorage.getItem('details7');
var details8 = localStorage.getItem('details8');

console.log("P0: " + $(".text-field").val());

// savedText = $(".text-field").text();

// console.log("Stored: " + details);

// Use just the hour segment to apply colour change
var currentHour = moment().hour();

var timeGen = 8
var timeBlock = $('.time-block');
// var timeRow = $('.time-row');
var tempRow = $('.temp-row');

// Main function to execute code
function renderSchedule() {
    // Dynamically create rows
    // Create a for-loop to iterate through the time slots.
    for (var i = 0; i < 9; i++) {
        timeTxt = timeGen[i]
        timeGen += 1
    // Use variables to dynamically replicate "newRow".
    var newRow = $('<ul class="time-row">');
    var timeCell = $('<li class="time-cell">');
    var txtField = $("<div class='text-cell present'>");
    var textCell = $('<textarea class="text-field" placeholder="Enter your details here..." name="details" rows="3">');
    var saveBtn = $('<li class="fas fa-save save-btn">');
    textCell.attr('id', 'details' + [i]);
    newRow.attr('id', 'timeSection' + [i]);
    
    // Function to save text 
    saveBtn.on('click', function (event) {
    event.preventDefault();
    console.log  ("saveBtn clicked!");
    details = $(this).siblings(".text-cell").children(".text-field").val();
    console.log ("details  = ", details);
    var detailsID = $(this).siblings(".text-cell").children(".text-field").attr('id');
    localStorage.setItem(detailsID, details);
    // localStorage.setItem("details", JSON.stringify(details));
    // console.log(event)
    // saveText()

    console.log("P1: " + $(".text-field").val());
    console.log("This is ID No: ", detailsID);

});

    // Append new row to exixting block
    timeBlock.append(newRow);
    txtField.append(textCell);
    newRow.append(timeCell, txtField, saveBtn);

    // Display generated time in text field
    timeCell.text(timeGen+(':00'));

    if (timeGen == 9) {
        timeCell.text(('0')+timeGen+(':00'));
      }

    // $(".text-field").val(details0).target;

    $("#details0").val(details0);
    $("#details1").val(details1);
    $("#details2").val(details2);
    $("#details3").val(details3);
    $("#details4").val(details4);
    $("#details5").val(details5);
    $("#details6").val(details6);
    $("#details7").val(details7);
    $("#details8").val(details8);


//-----------------------------------------------------
    // console.log(timeRow)
    console.log(timeGen);
//-----------------------------------------------------

//Use 'currentHour' variable to calculate set change
    if (currentHour > timeGen) {
        txtField.addClass( "previous" );
        txtField.removeClass("present future");
    }  else if (currentHour < timeGen) {
            txtField.addClass('future');
            txtField.removeClass("present previous");
        } 

    // Mouse-over effect
        saveBtn.mouseenter(function() {
            $( this ).css('background-color', '#83cddd');
            $( this ).css('color', 'rgb(139, 135, 135)'); 
            $( this ).css('cursor', 'pointer');
        
          });

        saveBtn.mouseleave(function() {
            $( this ).css('background-color', '#06aed5');
            $( this ).css('color', 'white');
        
          });
    
    }

    console.log("P2: " + $(".text-field").val());
    
}
// Hide original template and run the function
$(tempRow).hide();
renderSchedule();

// function saveText() {
//     $(".text-field").val() = localStorage.getItem('details');
// }

