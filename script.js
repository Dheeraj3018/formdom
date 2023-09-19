let sub = document.getElementById("survey-form");
let fname = document.getElementById("first-name");
let lname = document.getElementById("last-name");
let mail = document.getElementById("email");
let add = document.getElementById("address");
let pin = document.getElementById("pincode");
let gen = document.querySelectorAll("#gender");
let st = document.getElementById("state");
let coun = document.getElementById("country");
let fav = document.querySelectorAll("#radio");
let com = document.getElementById("comments");
function addData(el) {
  var table = document.querySelector(".table");
  let food = [];
  for (var i = 0; i < fav.length; i++) {
    if (fav[i].checked == true) {
      food.push(fav[i].value);
    }
  }
  if (food.length >= 2) {
    var tr = table.insertRow();
    var cell1 = tr.appendChild(document.createElement("td"));
    var cell2 = tr.appendChild(document.createElement("td"));
    var cell3 = tr.appendChild(document.createElement("td"));
    var cell4 = tr.appendChild(document.createElement("td"));
    var cell5 = tr.appendChild(document.createElement("td"));
    var cell6 = tr.appendChild(document.createElement("td"));
    var cell7 = tr.appendChild(document.createElement("td"));
    var cell8 = tr.appendChild(document.createElement("td"));
    var cell9 = tr.appendChild(document.createElement("td"));
    var cell10 = tr.appendChild(document.createElement("td"));
    cell1.textContent = fname.value;
    cell2.textContent = lname.value;
    cell3.textContent = mail.value;
    cell4.textContent = add.value;
    cell5.textContent = pin.value;
    cell6.textContent = st.value;
    cell7.textContent = coun.value;
    cell10.textContent = com.value;
    for (var i = 0; i < gen.length; i++) {
      if (gen[i].checked == true) {
        cell8.textContent = gen[i].value;
        break;
      }
    }
    cell9.textContent = food;
  } else {
    alert('"please select more than two foods"');
  }

  sub.reset();
}