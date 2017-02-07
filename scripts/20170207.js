/*
function takeOrder(topping, crustType) {
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
}

takeOrder('bacon', 'thin crust');
takeOrder('cheese', 'thick crust');
takeOrder('salad', 'wholegrain thin crust');
*/

function getRemainder(numberOne, numberTwo) {
  console.log(numberOne % numberTwo);
}

getRemainder(365, 27);


// pizza:)

var orderCount = 0;

function takeOrder(topping, crustType) {
  orderCount = orderCount + 1;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
}

function getSubTotal(itemCount) {
  return itemCount * 7.5;
}

function getTax() {
  return getSubTotal(orderCount) * 0.06;
}

function getTotal() {
  return getSubTotal(orderCount) + getTax();
}

takeOrder('bacon', 'thin crust');
takeOrder('cheese', 'thick crust');
takeOrder('salad', 'wholegrain thin crust');

console.log(getSubTotal(orderCount));

console.log(getTotal());


// Celsius to Fahrenheit operation

function multiplyByNineFifths(celsius) {
  return celsius * (9/5);
}

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
}

console.log('The temperature is ' + getFahrenheit(15) + '°F');
// Output: The temperature is 59°F


// Scopes

var laundryRoom = 'Basement';
var mailRoom = 'Room 1A';

function myApartment() {
  var mailBoxNumber = 'Box 3';
  laundryRoom = 'In-unit';
console.log('Mail box: ' + mailBoxNumber + ', Laundry' + laundryRoom);
}

console.log(myApartment());

console.log('Laundry: ' + laundryRoom + ', Mail: ' + mailRoom);
