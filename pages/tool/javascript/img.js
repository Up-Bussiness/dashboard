///////////////////////////////////////////////////////////////////////////Save img
let btn = document.getElementById('button');
let img = document.getElementById('img');
btn.addEventListener('click', () => {
    let imagePath = img.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});
function getFileName(str) {
    return str.substring(str.lastIndexOf('/') + 1)
}

let btn2 = document.getElementById('button2');
let img2 = document.getElementById('img2');
btn2.addEventListener('click', () => {
    let imagePath = img2.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});

let btn3 = document.getElementById('button3');
let img3 = document.getElementById('img3');
btn3.addEventListener('click', () => {
    let imagePath = img3.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});

let btn4 = document.getElementById('button4');
let img4 = document.getElementById('img4');
btn4.addEventListener('click', () => {
    let imagePath = img4.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});

let btn5 = document.getElementById('button5');
let img5 = document.getElementById('img5');
btn5.addEventListener('click', () => {
    let imagePath = img5.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});

let btn6 = document.getElementById('button6');
let img6 = document.getElementById('img6');
btn6.addEventListener('click', () => {
    let imagePath = img6.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});

let btn7 = document.getElementById('button7');
let img7 = document.getElementById('img7');
btn7.addEventListener('click', () => {
    let imagePath = img7.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});

let btn8 = document.getElementById('button8');
let img8 = document.getElementById('img8');
btn8.addEventListener('click', () => {
    let imagePath = img8.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});

let btn9 = document.getElementById('button9');
let img9= document.getElementById('img9');
btn9.addEventListener('click', () => {
    let imagePath = img9.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});

let btn10 = document.getElementById('button10');
let img10 = document.getElementById('img10');
btn10.addEventListener('click', () => {
    let imagePath = img10.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});

/////////////////////////////////////////////////////////////////////////Slidehow
var slideIndex = 1;
showSlidesi(slideIndex);

function plusSlidesi(n) {
  showSlidesi(slideIndex += n);
}

function currentSlidei(n) {
  showSlidesi(slideIndex = n);
}

function showSlidesi(n) {
  var ii;
  var slidess = document.getElementsByClassName("slidesi");
  var dots = document.getElementsByClassName("doti");
  if (n > slidess.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slidess.length}
  for (ii = 0; ii < slidess.length; ii++) {
      slidess[ii].style.display = "none";  
  }
  for (ii = 0; ii < dots.length; ii++) {
      dots[ii].className = dots[ii].className.replace(" activei", "");
  }
  slidess[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activei";
}