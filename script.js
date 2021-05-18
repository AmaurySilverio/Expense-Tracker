const form = document.querySelector("form");
const deleteButton = document.querySelector(".delete");
let expensesTotal = 0;

const addExpense = (event) => {
  event.preventDefault();
  const [name, date, amount] = [...event.target].map((data) => {
   return data.value;
  });

updateTotal(amount, '+');


  let tbody = document.querySelector("tbody");
  let trow = document.createElement("tr");
  let tdName = document.createElement("td");
  let tdDate = document.createElement("td");
  let tdAmount = document.createElement("td");
  let tdDelete = document.createElement("td");

  const nameValue = document.createTextNode(name);
  const dateValue = document.createTextNode(date);
  const amountValue = document.createTextNode(amount);

  let deleteBox = document.createElement("input");
  deleteBox.setAttribute("type", "checkbox");

  tdName.appendChild(nameValue);
  trow.appendChild(tdName);
  tdDate.appendChild(dateValue);
  trow.appendChild(tdDate);
  tdAmount.appendChild(amountValue);
  trow.appendChild(tdAmount);
  tdDelete.appendChild(deleteBox);
  trow.appendChild(tdDelete);
  tbody.appendChild(trow);

  form.reset();
};

const deleteAll = (event) => {
  let amount = 0;
  let expenses =
    event.target.parentElement.parentElement.parentElement.nextElementSibling
      .children;
  [...expenses].forEach((tr) => {
    if (tr.lastElementChild.lastElementChild.checked) {
      amount = amount + Number(tr.lastElementChild.previousElementSibling.textContent);
      tr.remove();
    }
  });
  updateTotal(amount, '-');

};

const updateTotal = (amount, operator) => {
  if(operator === '-' ){
  expensesTotal = (Number(expensesTotal) - Number(amount)).toFixed(2);
  
} 
else{
  expensesTotal = (Number(expensesTotal) + Number(amount)).toFixed(2);
  
}
let span = document.querySelector('span');
let totalTotal = document.createTextNode(expensesTotal);
span.replaceChild(totalTotal, span.firstChild);
}

form.addEventListener("submit", addExpense);
deleteButton.addEventListener("click", deleteAll);
