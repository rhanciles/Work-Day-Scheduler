
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
// Use just the hour segment to apply colour change
var currentHour = moment().hour();

var timeGen = 8
var timeBlock = $('.time-block');
var timeRow = $('.time-row');
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
    var textCell = $('<textarea class="text-cell present" id="schedule" placeholder="Enter your details here..." rows="3">');
    var saveBtn = $('<li class="fas fa-save save-btn">');
    
    // Append new row to exixting block
    timeBlock.append(newRow)
    newRow.append(timeCell, textCell, saveBtn);

    // Display generated time in text field
    timeCell.text(timeGen+(':00'))

    if (timeGen == 9) {
        timeCell.text(('0')+timeGen+(':00'))
      }

//-----------------------------------------------------
    console.log(timeRow)
    console.log(timeGen)
//-----------------------------------------------------

//Use 'currentHour' variable to calculate set change
    if (currentHour > timeGen) {
        textCell.addClass( "previous" )
        textCell.removeClass("present future");
    }  else if (currentHour < timeGen) {
            textCell.addClass('future');
            textCell.removeClass("present previous");
        } 

    // Function to save text 
        saveBtn.on('click', function () {
            // event.preventDefault();
          
            var details = $(".text-cell").val();
                  
            localStorage.setItem("details", details);
            localStorage.getItem("details");
        
        });

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
    
}
// Hide original template and run the function
$(tempRow).hide();
renderSchedule()

