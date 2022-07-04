const form = document.getElementById('form1');

form.addEventListener('submit', (event) => {
  // handle the form data

  // need to add error handle.
  // need to check if it's a number and not letter or special characters
  const foodBill = Number(form['foodbill'].value);
  const tipPercentage = Number(form['tip'].value) / 100;
  const totalDiv = document.getElementById('total').innerHTML;

  let tip = foodBill * tipPercentage;
  const total = foodBill + tip;
  document.getElementById('total').innerHTML = `$${total}`;

  event.preventDefault();
});
