
// NEW TASK
const editData = (e) => {
  const row = e.target.closest("tr");
  const inputs = row.querySelectorAll("input");
  inputs.forEach((input) => {
    input.value = input.parentElement.textContent.trim();
  });
  e.target.textContent = "Save";
  e.target.removeEventListener("click", editData);
  e.target.addEventListener("click", saveEditedData);
};

const saveEditedData = (e) => {
  const row = e.target.closest("tr");
  const inputs = row.querySelectorAll("input");
  inputs.forEach((input) => {
    input.parentElement.textContent = input.value;
  });
  e.target.textContent = "Edit";
  e.target.removeEventListener("click", saveEditedData);
  e.target.addEventListener("click", editData);
};

editBtn.addEventListener("click", editData);










                 
const addBtn = document.querySelector(".addBtn");
const tbody = document.querySelector("tbody");
let allow = true;

const orderRow = () => {
  const rows = [...document.querySelectorAll("tbody tr")];
  rows.map((row, key) => {
    [(row.querySelector("td").textContent = key + 1)];
  });
};

const saveData = (e) => {

  const inputs = [...document.querySelectorAll("input")];
  inputs.map((input) => {
    input.parentElement.textContent = input.value;
  });
  e.target.textContent = "Düzəliş et";
  allow = true;
};

addBtn.addEventListener("click", () => {
  if (!allow) {
    alert("Öncəki xananı doldurun pls...");
    return;
  }
  allow = false;
  const row = document.createElement("tr");
  const noTd = document.createElement("td");
  const nameTd = document.createElement("td");
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("placeholder", "Ad");
  nameTd.append(nameInput);
  const surnameTd = document.createElement("td");
  const surnameInput = document.createElement("input");
  surnameInput.setAttribute("type", "text");
  surnameInput.setAttribute("placeholder", "Soyad");
  surnameTd.append(surnameInput);
  const ageTd = document.createElement("td");
  const ageInput = document.createElement("input");
  ageInput.setAttribute("type", "number");
  ageInput.setAttribute("placeholder", "Yaş");
  ageTd.append(ageInput);
  const optionsTd = document.createElement("td");
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Yadda saxla";
  saveBtn.classList.add("saveBtn");
  saveBtn.addEventListener("click", saveData);
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Sil";

  cancelBtn.classList.add("cancelBtn");
  optionsTd.append(saveBtn, cancelBtn);
  row.append(noTd, nameTd, surnameTd, ageTd, optionsTd);
  tbody.append(row);
  orderRow();
});

