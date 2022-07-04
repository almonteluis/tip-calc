const form = document.getElementById('form1');

form.addEventListener('submit', (event) => {
  // handle the form data
  const foodBill = Number(form['foodbill'].value);
  const tipPercentage = Number(form['tip'].value) / 100;
  const totalDiv = document.getElementById('total').innerHTML;

  let tip = foodBill * tipPercentage;
  const total = foodBill + tip;
  document.getElementById('total').innerHTML = `$${total}`;

  event.preventDefault();
});
