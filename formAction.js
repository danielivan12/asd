var selectedRow = null;
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function onFormSubmit(){
  var formData = readFormData();
  if(selectedRow == null)
    insertNewRecord(formData);
    else updateRecord(formData);
  resertForm();
  modal.style.display = "none";
}
function readFormData() {
  var formData = {};
  formData["fullname"] = document.getElementById("fullname").value;
  formData["specialization"] = document.getElementById("specialization").value;
  formData["contact"] = document.getElementById("contact").value;
  formData["email"] = document.getElementById("email").value;
  formData["gender"] = document.getElementById("gender").value;
  formData["age"] = document.getElementById("age").value;
  formData["address"] = document.getElementById("address").value;
  formData["maritalstatus"] = document.getElementById("maritalstatus").value;
  return formData;
}
function insertNewRecord(data) {
  var table = document.getElementById("doctorslist").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullname;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.specialization;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.contact;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.email;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.gender;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.age;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = `<button id = "myBtn" onclick="onEdit(this)">View</button>
                    <button  onclick="onDelete(this)">delete</button>`;
  cell8 = newRow.insertCell(7);
  cell8.style.display = "none";
  cell8.innerHTML = data.address;
  cell8 = newRow.insertCell(8);
  cell8.style.display = "none";
  cell8.innerHTML = data.maritalstatus;
  cell8 = newRow.insertCell(9);
  cell8.style.display = "none";
  cell8.innerHTML = data.address;


}
function resertForm(){
  document.getElementById("fullname").value = "";
  document.getElementById("specialization").value = "";
  document.getElementById("contact").value = "";
  document.getElementById("email").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("age").value = "";
  document.getElementById("address").value = "";
   selectedRow = null;
}
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
  document.getElementById("specialization").value =  selectedRow.cells[1].innerHTML;
  document.getElementById("contact").value =  selectedRow.cells[2].innerHTML;
  document.getElementById("email").value = selectedRow.cells[3].innerHTML;
  document.getElementById("gender").value = selectedRow.cells[4].innerHTML;
  document.getElementById("age").value =  selectedRow.cells[5].innerHTML;
  document.getElementById("address").value =  selectedRow.cells[7].innerHTML;
  document.getElementById("maritalstatus").value =  selectedRow.cells[8].innerHTML;
  document.getElementById("submit").value = "update";
  modal.style.display = "block";
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullname;
  selectedRow.cells[1].innerHTML = formData.specialization;
  selectedRow.cells[2].innerHTML = formData.contact;
  selectedRow.cells[3].innerHTML = formData.email;
  selectedRow.cells[4].innerHTML = formData.gender;
  selectedRow.cells[5].innerHTML = formData.age;
  selectedRow.cells[6].innerHTML = `<button id="myBtn" onclick="onEdit(this)">View</button>
                    <button  onclick="onDelete(this)">delete</button>`;
  selectedRow.cells[7].innerHTML = formData.address;
  selectedRow.cells[8].innerHTML = formData.maritalstatus;

resertForm();
}
function onDelete(td){
  if(confirm('Are you sure to delete this record ? ')){
  row = td.parentElement.parentElement;
  document.getElementById("doctorslist").deleteRow(row.rowIndex);
  resertForm();
}
}
span.onclick = function() {
  modal.style.display = "none";
}
function showModal(){  document.getElementById("submit").value = "Add and Sumbit";modal.style.display = "block";}
window.onclick = function(event) {
  if (event.target == modal) {
    resertForm();
    modal.style.display = "none";
  }
}
