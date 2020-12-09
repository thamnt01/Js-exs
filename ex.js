// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output: Today is: Tuesday.
// Current time is: 10 PM: 30 : 38
// let today = new Date();
// let day = today.getDay()
// let daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', ' Friday', 'Saturday']
// console.log("Today is " + daylist[day])
// let hour = today.getHours();
// let minutes = today.getMinutes();
// let seconds = today.getSeconds();
// let session = (hour >= 12) ? "PM" : "AM";
// hour = (hour >= 12) ? hour - 12 : hour;
// if (hour === 0 && session === "PM") {
//     if (minutes === 0 && seconds === 0) {
//         hour = 12;
//         session = 'Noon'
//     }
//     else {
//         hour = 12;
//         session = 'PM'
//     }
// }
// if (hour === 0 && session === "AM") {
//     if (minutes === 0 && seconds === 0) {
//         hour = 12;
//         session = 'Midnight'
//     }
//     else {
//         hour = 12;
//         session = 'AM'
//     }
// }
// console.log('This time is ' + hour + session + ' : ' + minutes + ' : ' + seconds)
// 3. Write a JavaScript program to get the current date.
// mm - dd - yyyy, mm / dd / yyyy or dd - mm - yyyy, dd / mm / yyyy
// let date = new Date()
// let dd = date.getDate();
// let mm = date.getMonth();
// let yyyy = date.getFullYear();
// if (dd < 10) {
//     dd = `0${dd}`;
// }
// if (mm < 10) {
//     mm = `0${dd}`;
// }
// console.log(dd + '-' + mm + '-' + yyyy)
// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
// function tamGiac(a, b, c) {
//     let p = (a + b + c) / 2;
//     let s = Math.sqrt(p * (p - a) * (p - b) * (p - c))
//     return s;
// }
// console.log(tamGiac(5, 6, 7))
// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front. 
// let str = "ThamNguyen"
// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
// function isLeapYear(year) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             console.log(year + ' is leap year.')
//         }
//         else {
//             console.log(year + ' is not leap year')
//         }
//     }
//     else {
//         if (year % 4 === 0) {
//             console.log(year + ' is leap year.')
//         }
//         else {
//             console.log(year + ' is not leap year')
//         }
//     }
// }
// isLeapYear(2004);
// function isLeapYear(year) {
//     return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(isLeapYear(2002))
// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.  
// for (let year = 2014; year < 2050; year++) {
//     let selectedYear = [];
//     let day = new Date(year, 0, 1)
//     if (day.getDay() === 0) {
//         selectedYear.push(year)
//         console.log(selectedYear)
//     }
// }
// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number.If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"
// let randomNum = Math.floor(Math.random() * 11);
// alert(randomNum)
// let userCheck = parseInt(prompt('Hay nhap vao mot so nhe', " "))
// if (randomNum === userCheck) {
//     alert('good job')
// }
// else {
//     alert('Sorry, the random number is: ' + randomNum)
// }
// let randomNum = Math.floor(Math.random() * 11);
// let userCheck;
// while (randomNum !== userCheck) {
//     userCheck = parseInt(prompt('Hay nhap vao mot so nhe', " "))
// }
// alert('good job')
// 9. Write a JavaScript program to calculate days left until next Christmas. 
// let today = new Date()
// let nextChristmas = new Date(today.getFullYear(), 11, 24)
// 10. Write a JavaScript program to calculate multiplication and division of two numbers(input from user). 
// let num1 = parseInt(prompt('nhap vao so thu nhat', ''));
// let num2 = parseInt(prompt('nhap vao so thu hai', ''))
// function num() {
//     let multi = num1 * num2;
//     alert('the result is: ' + multi)
//     let devide = num1 / num2
//     alert('the result is: ' + devide)
// }
// num()
// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
// function cToF(doC) {
//     let doF = doC * 9 / 5 + 32;
//     console.log(doC + '\xB0C is ' + doF + ' \xB0F.')
// }
// function fToC(doF) {
//     let doC = (doF - 32) * 5 / 9;
//     console.log(doF + ' \xB0F. is ' + doC + '\xB0C')
// }
// cToF(60);
// fToC(45);
// 13. Write a JavaScript exercise to create a variable using a user - defined name. 
// ????
// 14. Write a JavaScript exercise to get the extension of a filename.Go to the editor
// let fileName = " myhome.sweet "
// console.log(fileName.split('.').pop())
// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference. 
// k hieu de bai 
// function compare13(n) {
//     let absolute;
//     if (n > 13) {
//         absolute = (n - 13) * 2;
//     }
//     return absolute;
// }
// console.log(compare13(34)
// )
// 16. Write a JavaScript program to compute the sum of the two given integers.If the two values are same, then returns triple their sum.
// function tinhTong(num1, num2) {
//     let sum;
//     if (num1 === num2) {
//         sum = (num1 + num2) * 3
//         console.log(sum)
//     }
//     else {
//         sum = num1 + num2
//         console.log(sum)
//     }
// }
// tinhTong(3, 3)
// let tinhTong = (num1, num2) => {
//     let sum = (num1 === num2) ? (num1 + num2) * 3 : (num1 + num2);
//     console.log(sum)
// }
// tinhTong(4, 4)
// 18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
// function isCheck(num1, num2) {
//     let check = (num1 === 50 || num2 === 50 || num1 + num2 === 50) ? true : false
//     console.log(check)
// }
// isCheck(20, 20)
// 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.  
// ??????
// 20. Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.Go to the editor
// let checkNum = (num1, num2) => {
//     let check = (num1 > 0 && num2 < 0 || num1 < 0 && num2 > 0) ? true : false
//     console.log(" one positive and one negative is " + check)
// }
// checkNum(2, -2)
// 21. Write a JavaScript program to create a new string adding "Py" in front of a given string.If the given string begins with "Py" then return the original string. 
// function checkStr(str) {
//     if (str === null || str === undefined || str.substring(0, 2) === "Py") {
//         return str;
//     }
//     else {
//         return "Py" + str
//     }
// }
// console.log(checkStr(" is a pig"))
// 22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.  
// function removeStr(str, index) {
//     let part1 = str.substring(0, index)
//     let part2 = str.substring(index + 3, str.length);
//     return (part1 + part2)
// }
// console.log(removeStr("Toi la mot bong hoa", 6))
// 23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters.The string length must be greater than or equal to 1.
// function newStr(str) {
//     if (str.length > 1) {
//         let first = str.substring(0, 1);
//         let mid = str.substring(1, str.length - 1);
//         let last = str.substring(str.length - 1);
//         let newString = last + mid + first
//         return newString;
//     }
//     else {
//         return str;
//     }
// }
// console.log(newStr("Hom nay troi dep qua"))
// 24. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back
// let newStr = (str) => {
//     let firstCharacter = str.substring(0, 1);
//     let newString = str + firstCharacter;
//     return newString
// }
// console.log(newStr("ABCD"))
//25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7. 
// let checkMulti = (num) => {
//     return (num % 3 === 0 && num % 7 !== 0) ? "boi cua 3" :
//         (num % 7 === 0 && num % 3 !== 0) ? "boi cua 7" :
//             "boi cua ca hai"
// }
// console.log(checkMulti(14))
// 27. Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.
// let isJava = (str) => {
//     let checkJava = str.substring(0, 4)
//     if (checkJava === "Java") {
//         return true;
//     }
//     else {
//         return false
//     }
// }
// console.log(isJava("Java is the best languages"))
// 30. Write a JavaScript program to check whether a string "Script" presents at 5th(index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one. 
// function checkStr(str) {
//     let index = str.indexOf("script");
//     if (index === 4) {
//         let first = str.substring(0, 4)
//         // let script = str.substring(4, 10)
//         let last = str.substring(10, str.length)
//         let newStr = first + last;
//         return newStr;
//     }
//     else {
//         return str;
//     }
// }
// console.log(checkStr("not stuff here"))
// 31. Write a JavaScript program to find the largest of three given integers.
// let nums = [1, 10, 7, 6]
// nums.sort(function (a, b) {
//     return a - b;
// }
// );
// let largest = nums[nums.length - 1]
// console.log(largest)
// function largestNum(num1, num2, num3) {
//     let numCheck;
//     if (num1 > num2) {
//         numCheck = num1;
//     }
//     else {
//         numCheck = num2;
//     }
//     if (num3 > numCheck) {
//         num3 = numCheck
//     }
//     return numCheck;
// }
// console.log(largestNum(3, 6, 10))
// 32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values. 
// let near100 = (num1, num2) => {
//     return (100 - num1 > 100 - num2) ? num2 : num1;
// }
// console.log(near100(29, 10))
// 33. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive. 
// let check = (num) => {
//     if ((num > 40 && num < 60) || (num > 70 && num < 100)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(check(62))
// 35. Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.
// function checkLetter(str) {
//     for (let index = 2; index < 5; index++) {
//         if (str[index] === "o") {
//             return true;
//         }
//     }
//     return false
// }
// console.log(checkLetter("abcoddksf"))
// function checkLetter(str, char) {
//     for (let index = 2; index < 5; index++) {
//         let letter = str.charAt(index);
//         if (letter == char) {
//             return true;
//         }
//     }
//     return false
// }
// console.log(checkLetter('0123456', "3"))
// function checkLetter(str, char, pos) {
//     let isCheck = str.indexOf(char, pos)
//     if (isCheck < 5) {
//         return true
//     }
//     return false
// }
// console.log(checkLetter("123456", "6", 2))
// 38. Write a JavaScript program to check the total marks of a student in various examinations.The student will get A + grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A + grade and total marks must be greater than or equal to 90. Return true if the student get A + grade or false otherwise.
var checkMark = function (total, final) {
    if (total > 100 && final > 100) {
        return false;
    }
    if (total > 88 && final > 89) {
        return true;
    }
};
checkMark(100, 90);
