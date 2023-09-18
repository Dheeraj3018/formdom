// let newElement = document.createElement("h1");
// //innertext
// newElement.innerText = "New Form";
// document.body.append(newElement);
// console.log(document);

// //inner HTml

// document.body.innerHTML = `<div>

// </div> `;
// let addbtn = document.getElementById("submit");
// addbtn.addEventListener("click", () => {});

// const inputArea = document.createElement("textarea");
// inputArea.setAttribute("id", "message-area");
// let validateString = document.createElement("div");
// validateString.setAttribute("id", "message-detail");
// document.body.append(inputArea, validateString);

// document.getElementById("submit").onclick => function () {
//   document.getElementById("table").style.display = "block";

//   var table = document.getElementById("table");
//   var row = table.insertRow(-1);
//   var name = row.insertCell(0);
//   var email = row.insertCell(1);
//   var address = row.insertCell(2);
//   var phone=row.insertCell(3);
//   name.innerHTML = document.getElementById("name").value;
//   email.innerHTML = document.getElementById("email").value;
//   address.innerHTML = document.getElementById("address").value;
//   phone.innerHTML=document.getElementById("phone").value;

//   return false;
// }

// window.addEventListener("scroll");
// window.addEventListener("resize");

const form = document.getElementById("form");
const table = document

  .getElementsByTagName("tbody")[0];

// Add form submission event listener
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;

  const email = document.getElementById("email").value;
  const address = document.getElementById("address");
  const state = document.getElementById("state");
  const gender = document.getElementById("gender");

  const pincode = document.getElementById("pincode").value;

  // Create a new row in the table
  const newRow = table.insertRow(table.rows.length);

  const newRow = table.insertRow();

  // Insert cells with the form values
  newRow.insertCell().textContent = firstname;
  newRow.insertCell().textContent = lastname;
  newRow.insertCell().textContent = email;
  newRow.insertCell().textContent = address;
  newRow.insertCell().textContent = state;
  newRow.insertCell().textContent = gender;
  newRow.insertCell().textContent = pincode;

  // Insert cells with the form values
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);
  const cell6 = newRow.insertCell(5);
  const cell7 = newRow.insertCell(6);

  // Clear the form fields
  form.reset();
});
