function myFunction() {
  var adminuser = document.getElementById("AdminUser").value;
  var adminpass = document.getElementById('AdminPass').value;
  if(adminuser =="Admin"){
    if(adminpass =="admin123"){
      var invalidtxt = document.getElementById('invalidtxt');
      invalidtxt.style.display = "none";
      window.location.href = "AdminDashboard.html";
    }
    else {
      var invalidtxt = document.getElementById('invalidtxt');
      invalidtxt.style.display = "block";
    }
  }
  else {
    var invalidtxt = document.getElementById('invalidtxt');
    invalidtxt.style.display = "block";
  }
}
