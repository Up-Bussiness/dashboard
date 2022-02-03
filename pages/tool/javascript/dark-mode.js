//Vars
  var body = document.querySelector('body');
  var lnav = document.getElementById('lnav');
  var icon1 = document.getElementById('licon1');
  var icon2 = document.getElementById('licon2');
  var icon3 = document.getElementById('licon3');
  var icon4 = document.getElementById('licon4');
  var icon5 = document.getElementById('licon5');
  var form1 = document.getElementById('form1');
  var form2 = document.getElementById('form2');
  var form3 = document.getElementById('form3');
  var form4 = document.getElementById('form4');
  var input1 = document.getElementById('input1');
  var input2 = document.getElementById('input2');
  var input3 = document.getElementById('input3');
  var input4 = document.getElementById('input4');
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var music = document.getElementById('music');
  var slidescont= document.getElementById('slidesigncont');


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
    
    var elements = [body, form1, form2, form3, form4, input1, input2, input3,
                    input4, next, prev, music, icon1, icon2, icon3,
                    icon4, icon5, lnav, slidescont];
    
    elements.forEach(function(element) {
      element.classList.remove("night");
      element.classList.add("day");
    });

  } else {
    // Night Time
    console.log("Night time");
    
    var elements = [body, form1, form2, form3, form4, input1, input2, input3,
                    input4, next, prev, music, icon1, icon2, icon3,
                    icon4, icon5, lnav, slidescont];
    
    elements.forEach(function(element) {
      element.classList.remove("day");
      element.classList.add("night");
    });

  }
}