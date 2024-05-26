// Q:no 1

// Literal notation

// var studentNames = [];
// document.write("Literal Notation Array:", studentNames);

// Q:no 2

// Object notation

// var studentNames = new Array();
// document.write("Object Notation Array:", studentNames);

// Q:no 3

// var student = ["Javeria"];
// console.log(student);

// Q:no 4

// var num = [0];
// console.log(num);

// Q:no 5

// var bool = [true];
// console.log(bool);

// Q:no 6

// var mixed = [0,"Hello",true];
// console.log(mixed);

// Q:no 7

// var qualification = ["SSC","HSC","BSC","BS","BCOM","MS","M.Phil","PhD"];
// document.write("<oll><li>" + qualification + "</li></ol>");

// Q:no 8

// var studentNames = ["Javeria", "Mariyam", "Hina"];
// var studentScores = [480, 320, 230];
// var totalMarks = 500;

// var std_1 = (studentScores[0] / totalMarks) * 100;
// document.write("Scores of Javeria is" + " " + studentScores[0] + "." + "Percentage" + " " + std_1 + "<br>");
// var std_2 = (studentScores[1] / totalMarks) * 100;
// document.write("Scores of Mariyam is" + " " + studentScores[1] + "." + "Percentage" + " "  + std_2 + "<br>");
// var std_3 = (studentScores[2] / totalMarks) * 100;
// document.write("Scores of Hina is" + " " + studentScores[2] + "." + "Percentage" + " "  + std_3);

// Q:no 9

// a)

// var colorName = ["Red", "Blue", "Orange"];
// colorName.unshift("Pink");
// document.write(colorName);

// var colorName = ["Red", "Blue", "Orange"];
// var newColor = prompt("Enter a color:");

// colorName.unshift(newColor);

// document.write(colorName);

// b)

// var colorName = ["Red", "Blue", "Orange"];
// var newColor = prompt("Enter a color:");

// colorName.push(newColor);

// document.write(colorName);

// c)

// var colorName = ["Red", "Blue", "Orange"];
// var newColor = prompt("Enter a color:");
// var newColor_1 = prompt("Enter second color:");

// colorName.unshift(newColor);
// colorName.unshift(newColor_1);

// document.write(colorName);

// d)

// var colorName = ["Red", "Blue", "Orange"];

// colorName.shift();

// document.write(colorName);

// e)

// var colorName = ["Red", "Blue", "Orange"];

// colorName.pop();

// document.write(colorName);

// f)

// var colorName = ["Red", "Blue", "Orange"];

// var index = +prompt("Enter the index where you want to add the color:");
// var newColor = prompt("Enter the color name:");
// colorName.splice(index, 0, newColor);

// document.write(colorName);

// g)

// var colorName = ["Red", "Blue", "Orange", "Yellow", "Green"];
// var index = +prompt("Enter the index from where you want to delete color(s):");
// var deleteCount = +prompt("Enter the number of colors you want to delete:");
// var deletedColors = colorName.splice(index, deleteCount);
// document.write("Updated array: " + colorName + "<br>");
// document.write("Deleted colors: " + deletedColors);

// Q:no 10

// var num = [320 , 230 , 480 , 120];
// document.write("Scores of students :" + " " + num + "<br>");
// num.sort((a,b) => a-b);
// document.write("Ordered Scores of students :" + " " + num);

// Q:no 11

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("Cities list" + "<br>" + cities + "<br>");

// var selectedCities = cities.slice(2, 4);
// document.write("Selected cities list" + "<br>" + selectedCities);

// Q:no 12

// var arr = ["This", " is", " my", " cat"];
// document.write("Array" + "<br>" + arr + "<br>");
// var oneLine = arr.join("");

// document.write("String"+ "<br>" + oneLine);

// Q:no 13

// var fifoArray = [];

// fifoArray.push("Keyboard");
// fifoArray.push("Mouse");
// fifoArray.push("Printer");
// fifoArray.push("Moniter");

// document.write("Devices" + "<br>" + fifoArray + "<br>" + "<br>");

// document.write("Out" + "<br>" + fifoArray.shift() + "<br>");
// document.write("Out" + "<br>" + fifoArray.shift() + "<br>");
// document.write("Out" + "<br>" + fifoArray.shift() + "<br>");
// document.write("Out" + "<br>" + fifoArray.shift());

// document.write(fifoArray + "<br>"); 

// Q:no 14

// var lifoArray = [];

// lifoArray.push("Keyboard");
// lifoArray.push("Mouse");
// lifoArray.push("Printer");
// lifoArray.push("Moniter");
// document.write("Devices" + "<br>" + lifoArray + "<br>" + "<br>");

// document.write("Out" + "<br>" + lifoArray.pop() + "<br>");
// document.write("Out" + "<br>" + lifoArray.pop() + "<br>");
// document.write("Out" + "<br>" + lifoArray.pop() + "<br>");
// document.write("Out" + "<br>" + lifoArray.pop());

// document.write(lifoArray);

// Q:no 15

// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");
// document.write('<option value="' + phoneManufacturers[0] + '">' + phoneManufacturers[0] + '</option>');
// document.write('<option value="' + phoneManufacturers[1] + '">' + phoneManufacturers[1] + '</option>');
// document.write('<option value="' + phoneManufacturers[2] + '">' + phoneManufacturers[2] + '</option>');
// document.write('<option value="' + phoneManufacturers[3] + '">' + phoneManufacturers[3] + '</option>');
// document.write('<option value="' + phoneManufacturers[4] + '">' + phoneManufacturers[4] + '</option>');
// document.write('<option value="' + phoneManufacturers[5] + '">' + phoneManufacturers[5] + '</option>');
// document.write("</select>");
