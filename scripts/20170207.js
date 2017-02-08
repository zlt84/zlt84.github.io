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


// Arrays

var bucketList = ['item 0', 'item 1', 'item 2'];

bucketList.push('item 3', 'item 4');

bucketList.pop();

var listItem = bucketList[3];


console.log(bucketList.length);
console.log(bucketList);
console.log(listItem);


// Fun fact: You can also access each individual character in a string the same way you do with arrays. For instance, you can write:
var hello = 'Hello World';
console.log(hello[6]);
// Output: W
// 'W' will be the output since it's the character in the 6th position. This works because JavaScript internally stores strings in a similar way that it stores arrays.


// Fun fact: .length is also a property for strings.
//For instance, you can write 'Hello World'.length, and it will output 11 (the number of characters in "Hello World").
console.log(hello.length);
// Output: 11
