function logout() {
  var confirm = document.getElementById('Confirm')
  confirm.classList.toggle("hide");
}
function no() {
  var confirm = document.getElementById('Confirm')
  confirm.classList.toggle("hide");
}
function yes() {
    window.location.href = "loginas.html";
}
function show(){
  var confirm = document.getElementById('sidenav')
  confirm.classList.toggle("extend");
}
function showDocDetails() {
  window.location.href = "doctorslist.html";
}
function showNurseDetails() {
  window.location.href = "nurselist.html";
}
