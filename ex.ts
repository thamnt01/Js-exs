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

// let checkMark = (total, is_final) => {
//     return total >= (is_final ? 90 : 89) && total <= 100;
// }
// console.log(checkMark(89, true))

// baif này k hiểu đề bài mà cũng k hiểu ngta làm cái j luôn


// 39. Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80. 

// let checkSum = (num1, num2) => {
//     let isSum = num1 + num2;
//     return (isSum >= 50 && isSum <= 80) ? 65 : 80
// }
// console.log(checkSum(19, 11))


// 43. Write a JavaScript program to check from three given numbers(non negative integers) that two or all of them have the same rightmost digit.

// let checkNum = (num1, num2, num3) => {
//     let isSame1 = num1 % 10;
//     let isSame2 = num2 % 10;
//     let isSame3 = num3 % 10;
//     let newArray = [isSame1, isSame2, isSame3];
//     // let rs = false;
//     // newArray.forEach(element => {
//     //     const len = newArray.filter(x => x === element).length;
//     //     if (len > 1) { rs = true; }
//     // });
//     // return rs;

//     return newArray.some((value, index) => newArray.findIndex(x => x === value) !== index)

//     // return (isSame1 === isSame2 || isSame1 === isSame3 || isSame2 === isSame3)
// }
// console.log(checkNum(21, 31, 42))


// 48. Write a JavaScript program to reverse a given string.

// function reverseStr(str) {
//     let arrayStr = str.split(" ");
//     let reverseArray = arrayStr.reverse();
//     let reverseNewStr = reverseArray.join(" ")
//     return reverseNewStr;
// }
// console.log(reverseStr("Hom nay la thu 7"))


// 49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

// let replace = (str) => {
//     for (let index = 0; index < str.length; index++) {

//     }
// }


// 50. Write a JavaScript program to capitalize the first letter of each word of a given string.


// function upperCaseFirstLetter(str) {
//     let arrayStr = str.split(' ');
//     let newArray = [];
//     let upperStr;
//     for (let index = 0; index < arrayStr.length; index++) {
//         let letter = arrayStr[index].charAt(0).toUpperCase() + arrayStr[index].slice(1)
//         newArray.push(letter);
//         upperStr = newArray.join(' ')

//     }
//     return upperStr;
// }
// console.log(upperCaseFirstLetter("hom nay la ngay dep troi"))

// thac mac ve dap an cua nguoi ta lam


// 51. Write a JavaScript program to convert a given number to hours and minutes.

// let isClock = (num) => {
//     let hour = Math.floor(num / 60);
//     let minute = num % 60;
//     let minutes = (minute < 10) ? "0" + minute : " " + minute;
//     console.log(num + " quy doi ra " + hour + ":" + minutes + " phut")

// }
// isClock(61)


// 52. Write a JavaScript program to convert the letters of a given string in alphabetical order.

// let sortLetter = (str) => {
//     return str.split("").sort().join('');
// }

// console.log(sortLetter("cam"))


// 53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere(at least once) in a given string.

// function checkSpaceAB(str) {
//     return (/a...b/g).test(str) || (/b...a/g).test(str)
// }
// console.log(checkSpaceAB('bssdfafss'))

// 54. Write a JavaScript program to count the number of vowels in a given string

// let countVowels = (str) => {
//     let arrayCount = str.match(/[ueoai]/gi)
//     console.log(arrayCount.length)
// }
// countVowels('w3resource.com')

// 55. Write a JavaScript program to check whether a given string contains equal number of p's and t's.

// function checkPB(str) {
//     let arrayB = str.match(/p/g);
//     let arrayP = str.match(/b/g);
//     return arrayB.length === arrayP.length
// }
// console.log(checkPB('pbb p'))

// 56. Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.

// k biet lam bai nay

// 57. Write a JavaScript program to create a new string of specified copies(positive number) of a given string.

// let repeatStr = (str) => {
//     return str.repeat(5);
// }
// console.log(repeatStr('hom nay la thu bay'))


// 58. Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string.The length of the given string must be 3 and above.

// function copyStr(str) {
//     if (str.length > 3) {
//         let lastCharacters = str.slice(str.length - 3, str.length);
//         let newStr = lastCharacters.repeat(3);
//         return newStr;
//     }
//     else {
//         return str;
//     }
// }
// console.log(copyStr('hom s'))


// 63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length.The string length must be greater or equal to three.

// function middleStr(str) {
//     if (str.length % 2 !== 0 && str.length >= 3) {
//         let middleLetters = str.substring((str.length - 3) / 2, (str.length - 3) / 2 + 3)
//         return middleLetters
//     }
//     else {
//         return false
//     }
// }
// console.log(middleStr('middleabc'))


// 64. Write a JavaScript program to concatenate two strings and return the result.If the length of the strings are not same then remove the characters from the longer string.

// let concatEqualStr = (str1, str2) => {
//     if (str1.length !== str2.length) {
//         let isCutStr;
//         if (str1.length > str2.length) {
//             isCutStr = str1.substring(0, str2.length);
//             return isCutStr + str2;
//         }
//         else {
//             isCutStr = str2.substring(0, str1.length);
//             return str1 + isCutStr;
//         }
//     }
//     else {
//         return str1 + str2;
//     }
// }
// console.log(concatEqualStr('hom nay la', 'troi dep'))

// use Math.min

// let concatEqualStr = (str1, str2) => {
//     let m = Math.min(str1.length, str2.length)
//     return str1.substring(0, m) + str2.substring(0, m)
// }
// console.log(concatEqualStr('hom', 'naya'))

// 69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
// let isSum = (arr: number[]) => {
//     const result = arr.reduce((a, b) => {
//         return a + b;
//     })
//     return result;
// }
// console.log(isSum([1, 2, 3]))


// 70. Write a JavaScript program to rotate the elements left of a given array of integers of length 3.  
// const arr = [1, 2, 3, 4, 5]
// for (let index = 0; index < arr.length; index++) {
//     const results = arr.splice(0, 1);
//     const first = results[0];
//     // const [first] = arr.splice(0, 1)[0]
//     arr.push(first);
//     console.log(arr);

// }



// 71. Write a JavaScript program to check whether 1 appears in first or last position of a given array of integers.The array length must be greater or equal to 1. 

// let checkOne = (numArr) => {
//     return numArr[0] === 1 || numArr[numArr.length - 1] === 1
// }
// console.log(checkOne([1, 3, 1]))


// 73. Write a JavaScript program to reverse the elements of a given array of integers length 3. 

// function reverseArr(arr) {
//     return arr.reverse()
// }
// console.log(reverseArr([1, 24, 5]))


// 74. Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value.Display the new array.

// function checkLarge(arr) {
//     let minNum = Math.max(arr[0], arr[arr.length - 1])
//     let newArr = arr.map(x => x = minNum);
//     return newArr;
// }
// console.log(checkLarge([1, 3, 5, 5, 3, 6]))

// 75. Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.  

// function takeMiddle(arr1, arr2) {
//     if (arr1.length % 2 !== 0 && arr2.length % 2 !== 0) {
//         let newArr = [];
//         let x1 = arr1[Math.floor(arr1.length / 2)];
//         let x2 = arr2[Math.floor(arr2.length / 2)];
//         newArr.push(x1, x2);
//         return newArr;
//     }
// }
// console.log(takeMiddle([1, 2, 4, 5, 6], [1, 2, 4]))


// 83. Write a JavaScript to find the longest string from a given array of strings.


// let longestStr = (arr) => {
//     let maxValue = arr[0].length;
//     arr.map(x => maxValue = Math.max(maxValue, x.length))
//     return arr.filter(y => y.length === maxValue)

// }
// console.log(longestStr(['hom', 'nay', 'troi', 'khong', 'mua']))


// 89. Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.Go to the editor
// For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator(*) to obtain x * y = z

























