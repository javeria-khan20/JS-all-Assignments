// Qno :1

// var multidimensional = [[[]]];
// console.log(multidimensional);

// Qno :2

// let matrix = [[0, 1, 2 ,3],[1, 0, 1 ,2],[2, 1, 0 ,1]];

// console.log(matrix);

// Qno :3

// for(var i = 1; i <= 10; i++ ){
//     document.write(i + "<br>");
// }

// Qno :4

// var number = +prompt("Enter the number for the multiplication table:");
// var length = +prompt("Enter the length of the multiplication table:");

// document.write("Multiplication table of " + number + " up to " + length + " terms:" + "<br>");
// for (var i = 1; i <= length; i++) {
//     document.write(number + " x " + i + " = " + number * i + "<br>");
// }

// Qno :5

// var fruits = ["apple", "banana", "mango" , "orange", "strawberry"];

// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }

// for (var i = 0 ; i < fruits.length ; i++){
//         document.write("Element at index " + i + " " + "is" + " " + fruits[i] + "<br>");
// }

// Qno :6

// a)
// var counting = [];
// for (var i = 1; i <= 15; i++) {
//     counting.push(i);
// }

// document.write("Counting: " + "<br>" + counting.join(", ") + "<br>");

// b)
// var reverse = [];
// for (var i = 10; i >= 1; i--) {
//     reverse.push(i);
// }

// document.write("Reverse Counting: " + "<br>" + reverse.join(", ") + "<br>");

// c)
// var even = [];
// for (var i = 0; i <= 20; i += 2) {
//     even.push(i);
// }

// document.write("Even Numbers: " + "<br>" + even.join(", ") + "<br>");

// d)
// var odd = [];
// for (var i = 1; i < 20; i += 2) {
//     odd.push(i);
// }

// document.write("Even Numbers: " + "<br>" + odd.join(", ") + "<br>");

// e)
// var series = [];

// for (var i = 2; i <= 20; i += 2) {
//     series.push(i + 'k');
// }

// document.write("Series: " + series.join(", "));

// Qno :7

// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:");
// var cookieIndex = bakery.indexOf("cookie");

// if(bakery.includes(userInput)){
//     alert("Cookies item is available at index " + cookieIndex + " " + "in our bakery");
// } else{
//     alert("We are sorry" + " " + userInput + "' is not found in our bakery.");
// }

// Qno :8

// var num = [24, 53, 78, 91, 12];
// var maxNumber = num[0];
// document.write("Array items :" + num + "<br>");

// for (var i = 1; i < num.length; i++) {
//     if (num[i] > maxNumber) {
//         maxNumber = num[i];
//     }
// }

// document.write("The largest number in the array is: " + maxNumber);

// Qno :9

// var num = [24, 53, 78, 91, 12];
// var minNumber = num[0];
// document.write("Array items :" + num + "<br>");

// for (var i = 1; i < num.length; i++) {
//     if (num[i] < minNumber) {
//         minNumber = num[i];
//     }
// }

// document.write("The smallest number in the array is: " + minNumber);

// Qno :10

// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(i + ",");
//     }
// }