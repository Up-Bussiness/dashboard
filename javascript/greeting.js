var body = document.querySelector("body");
var greet = document.getElementById("greeting");

function updateClock() {
  // Get date
  var date = new Date();

  // Get hours and minutes
  var hours = date.getHours();
  var minutes = date.getMinutes();

  if (minutes <= 9) {
    minutes = "0" + minutes;
  }
  
  var time = hours + ":" + minutes;

  timeDisplay.innerHTML = time;
}

// Update every second
setInterval(updateClock, 100);
setInterval(check, 100);

// Check for date or night
function check() {
  
  // Get date
  var date = new Date();
  // Get hours
  var hours = date.getHours();
  
  if (hours >= 7.9 && hours <= 16.9) {
    // Day Time
    console.log("Day time");
    
    var elements = [body, greet];
    
    elements.forEach(function(element) {
      element.classList.remove("night");
      element.classList.add("day");
    });

  } else {
    // Night Time
    console.log("Night time");
    
    var elements = [body, greet];
    
    elements.forEach(function(element) {
      element.classList.remove("day");
      element.classList.add("night");
    });

  }
}

  var today = new Date();
  var hourNow = today.getHours();
  var greeting;
  var icon;

  if (hourNow < 11.9){
    greeting = "¡Buenos días!";
    icon = "coffee";
  }
  else if (hourNow < 17.9){
    greeting = "¡Buenas tardes!";
    icon = "sun-o";
  }
  else if (hourNow < 23.9){
    greeting = "¡Buenas noches!";
    icon = "moon-o";
  }
  else {
    greeting = "Welcome";
  }

  document.getElementById("col-1").innerHTML = "<h3>" + greeting + " </h1>";

  document.getElementById("icon").innerHTML = ('<i class="fa fa-' + icon + '" aria-hidden="true"></i>');