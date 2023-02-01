
var currentDate = moment().format("dddd Do MMMM YYYY"); 
$('#currentDay').text(currentDate);
// var shoppingListEl = $('#shopping-list');
var currentTime = moment().format("LT"); 
$('#currentTime').text(currentTime);

var timeGen = 8
var timeBlock = $('.time-block');
var timeRow = $('.time-row');
var tempRow = $('.temp-row');

function renderSchedule() {
    // Dynamically create rows
    // Create a for-loop to iterate through the time slots.
    for (var i = 0; i < 9; i++) {
        timeTxt = timeGen[i]
        timeGen += 1
    // Use variables to dynamically replicate "newRow".
    var newRow = $('<ul class="time-row">');
    var timeCell = $('<li class="time-cell">');
    var textCell = $('<textarea class="text-cell future" id="schedule" placeholder="Enter your details here..." rows="3">');
    var saveBtn = $('<li class="fas fa-save save-btn">');
    
    // Append new row to exixting block
    timeBlock.append(newRow)
    newRow.append(timeCell, textCell, saveBtn);

    // Display generated time in text field
    timeCell.text(timeGen+(':00'))

    if (timeGen == 9) {
        timeCell.text(('0')+timeGen+(':00'))
      }

    console.log(timeRow)
    console.log(timeGen)
    
    if (moment.hour > timeGen) {
        textCell.addclass('past');
        textCell.removeClass("present future");
    }  else if (moment.hour < timeGen) {
            textCell.addclass('future');
            textCell.removeClass("present past");
        } 

        saveBtn.on('click', function (event) {
            event.preventDefault();
          
            var details = $(".text-cell").value;
                  
            localStorage.setItem("details", details);
        
        });

        saveBtn.mouseenter(function() {
            $( this ).css('background-color', '#83cddd'), ('color', 'rgb(199, 199, 199)'), ('cursor', 'pointer');
        
          });

    
    }
    
}
// Hide original template and run the function
$(tempRow).hide();
renderSchedule()

