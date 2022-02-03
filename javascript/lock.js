function lock(password, lsEnt) {
  if(password === undefined) {
    return;
  }
  if(lsEnt !== undefined) {
    if(localStorage[lsEnt] == "y") {
      return;
    }
  }
  var page = document.querySelector("html");
  var oldDisplay = page.style.display;
  page.style.display = "none";
  var enteredPass = prompt("Introduzca la contraseña");
  if(enteredPass === password) {
    page.style.display = oldDisplay;
    if(lsEnt !== undefined) {
      localStorage[lsEnt] = "y";
    }
  } else {
    alert("Contraseña incorrecta. Acceso Denegado");
  }
}
lock("UBpass");