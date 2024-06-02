// Q:no 1

// var city = prompt("Enter a City");

// if(city == "Karachi"){
//     alert("“Welcome to city of lights”");
// } else{
//     alert("Karachi Likh kay try karo");
// }

// Q:no 2

// var gender = prompt("What's your gender");

// if(gender === "Male"){
//     alert("Good Morning Sir");
// } else if(gender === "Female"){
//     alert("Good Morning Ma’am");
// } else{
//     alert("Good Morning")
// }

// Q:no 3

// var signal = prompt("Enter a traffic signal color");

// if(signal === "Red" , "Yellow" , "Green"){
//     document.write("<table>")
//     document.write("<tr><td>Signals</td><td></td><td>Message</td></tr>")
//     document.write("<tr><td>Red</td><td></td><td>Must Stop</td></tr>")
//     document.write("<tr><td>Yellow</td><td></td><td>Ready to move</td></tr>")
//     document.write("<tr><td>Green</td><td></td><td>Move now</td></tr>")
//     document.write("</table>")
// } else{
//     alert("It isn't traffic signal color");
// }


// Q:no 4

// var fuel = +prompt("How much fuel do you have in your tank?" , "Enter in digits");

// if(fuel < 0.25){
//     alert("Phely fuel dalwa loo agye maat jao..!");
// } else{
//     alert("0.25 say zaida hai chalo bahar chalein..");
// }

// Q:no 5

// a)
// var a = 4;

// if (++a === 5){
//     alert("given condition for variable a is true");
// } // Chal rha hai qk yeh 5 hogaya hai

// b)
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// } //Nahi chal rha qk post increment hai bd main hoga 83

// c)
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// } //Condition 2 & 4 is working bcz both are true

// d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// } //Condition is working bcz it is true

// e)
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     } //First condition is true bcz if always works when condition is true

// f)
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     } // Condition is true bcz r (ASCII-no) 72 and t (ASCII-no) 74

// Q:no 6

var sub_1 = +prompt("Enter your obtained marks of english subject");
var sub_2 = +prompt("Enter your obtained marks of urdu subject");
var sub_3 = +prompt("Enter your obtained marks of computer subject");
var totalMarks = +prompt("Enter your total marks");

var obtained = sub_1 + sub_2 + sub_3;

var percentage = (obtained / totalMarks) * 100;
var garde;
var remarks;
document.write("<table>")

if (percentage >= 80 && percentage < 101) {
    garde = "A+"
    document.write("<tr><th>" + "Percentage %" + "</th><th>" + "Grades" + "</th><th>" + "Remarks" + "</th></tr>");
    document.write("<tr><td>" + "Greater then & equal to 80" + "</td><td>" + "A+1" + "</td><td>" + "Excellent" + "</td></tr>");
} else if(percentage >= 70){
    garde = "A"
    document.write("<tr><th>" + "Percentage %" + "</th><th>" + "Grades" + "</th><th>" + "Remarks" + "</th></tr>");
    document.write("<tr><td>" + "Greater then & equal to 70" + "</td><td>" + "A" + "</td><td>" + "Good" + "</td></tr>");
} else if(percentage >= 60){
    garde = "B"
    document.write("<tr><th>" + "Percentage %" + "</th><th>" + "Grades" + "</th><th>" + "Remarks" + "</th></tr>");
    document.write("<tr><td>" + "Greater then & equal to 60" + "</td><td>" + "B" + "</td><td>" + "You need to improve" + "</td></tr>");
} else if(percentage < 60){
    garde = "FAIL"
    document.write("<tr><th>" + "Percentage %" + "</th><th>" + "Grades" + "</th><th>" + "Remarks" + "</th></tr>");
    document.write("<tr><td>" + "Less then 60" + "</td><td>" + "Fail" + "</td><td>" + "Sorry" + "</td></tr>");
    document.write("</table>")
}

// Asking miss
document.write("<h1>Marks Sheet</h1>" + "<br>");
document.write("Total marks :" + " " + totalMarks + "<br>");
document.write("Percentage :" + " " + percentage + "<br>");
document.write("Grade :" + " " + garde + "<br>");
document.write("Rmarks :" + " " + remarks + "<br>");
document.write(percentage.toFixed(2) + "%");

// Q:no 7

// var secretNumber = Math.floor(Math.random() * 10) + 1;

// var guess = +prompt("Guess the secret number (between 1 and 10):");

// if (guess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Sorry, incorrect guess. The secret number was " + secretNumber);
// }

// Q:no 8

// var number = +prompt("Enter a number:");

// if (number % 3 === 0) {
//     alert("The number " + number + " is divisible by 3.");
// } else {
//     alert("The number " + number + " is not divisible by 3.");
// }

// Q:no 9

// var number = +prompt("Enter a number:");

// if (number % 2 === 0) {
//     alert("The number " + number + " is even.");
// } else {
//     alert("The number " + number + " is odd.");
// }

// Q:no 10

// var temperature = +prompt("Enter temperature");

// if(temperature > 40){
//     alert("“It is too hot outside.”")
// } else if(temperature > 30){
//     alert("“The Weather today is Normal.”")
// } else if(temperature > 20){
//     alert("“Today’s Weather is cool.”")
// } else if(temperature > 10){
//     alert("“OMG! Today’s weather is so Cool.")
// } else{
//     alert("Only numbers allowed");
// }

// Q:no 11


// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");
// var result;

// if (operation === '+') {
//     result = num1 + num2;
// } else if (operation === '-') {
//     result = num1 - num2;
// } else if (operation === '*') {
//     result = num1 * num2;
// } else if (operation === '/') {
//     if (num2 !== 0) {
//         result = num1 / num2;
//     } else {
//         alert("Error: Division by zero is not allowed.");
//     }
// } else if (operation === '%') {
//     if (num2 !== 0) {
//         result = num1 % num2;
//     } else {
//         alert("Error: Modulo by zero is not allowed.");
//     }
// } else {
//     alert("Invalid operation. Please enter a valid operation (+, -, *, /, %).");
// }

// if (result !== undefined) {
//     alert("Result: " + result);
// }





