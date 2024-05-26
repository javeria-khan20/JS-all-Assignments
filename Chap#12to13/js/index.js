// Q:no 1

// var character = prompt("Enter a character:");
// var charCode = character.charCodeAt(0);

// if (charCode >= 48 && charCode <= 57) {
//     alert("The character " + character + " is a number.");
// } else if (charCode >= 65 && charCode <= 90) {
//     alert("The character " + character + " is an uppercase letter.");
// } else if (charCode >= 97 && charCode <= 122) {
//     alert("The character " + character + " is a lowercase letter.");
// } else {
//     alert("The character " + character + " is neither a number nor a letter.");
// }

// Q:no 2

// var num1 = parseInt(prompt("Enter the first integer:"));

// var num2 = parseInt(prompt("Enter the second integer:"));

// if (num1 === num2) {
//     alert("Both integers are equal.");
// } else {
//     var larger = num1 > num2 ? num1 : num2;

//     alert("The larger integer is: " + larger);
// }

// Q:no 3

// var num = +prompt("Enter a number");

// if(num > 0){
//     alert("Number is positive");
// } else if(num < 0){
//     alert("Number is negative");
// } else{
//     alert("Number is Zero");
// }

// Q:no 4

// var char = prompt("Enter a character");

// if (char.length === 1){
//     var vowels = "aeiouAEIOU";
//     alert(vowels.includes(char));
// }  else {
//     alert("Invalid input! Please enter exactly one character.");
// }

// Q:no 5

// var correctPassword = "password123";
// var userPassword = prompt("Enter your password: ");

// if (userPassword === "") {
//     alert("Please enter your password");
// } else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password");
// } else {
//     alert("Incorrect password");
// }

// Q:no 6

// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// alert(greeting);

// Q:no 7

// var time = prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7 PM): ");
// var hour = parseInt(time.slice(0, 2));

// if ( hour >= 0 && hour < 24) {
//     var greeting;

//     if (hour < 12) {
//         greeting = "Good morning";
//     } else if (hour < 18) {
//         greeting = "Good afternoon";
//     } else {
//         greeting = "Good evening";
//     }
    
//     alert(greeting);
// } else {
//     alert("Invalid input! Please enter a valid time in 24-hour format.");
// }


