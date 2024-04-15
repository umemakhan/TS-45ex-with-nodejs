// test for equality and inequality with string
var myName = "Omaima Khan";
console.log("Is myName equal to Omaima Khan?");
console.log(myName == "Omaima Khan");
console.log("\nIs myName not equal to Omaima Khan?");
console.log(myName != "Omaima Khan");
// test using the lower case function
var countryName = "PAKISTAN";
console.log("\nIs countryName equal to pakistan after using lower case function?");
console.log(countryName.toLowerCase() == "pakistan");
console.log("\nIs countryName not equal to pakistan after using lower case function?");
console.log(countryName.toLowerCase() != "pakistan");
// numerical tests
var two = 2;
var three = 3;
var five = 5;
// equality
console.log("\nIs two equal to 2?");
console.log(two == 2);
// ineuality
console.log("\nIs 2 not equal to two?");
console.log(2 != two);
// greater than
console.log("\nIs three greater than two?");
console.log(three > two);
// less than
console.log("\nIs two less than three?");
console.log(two < three);
// less than or equal to
console.log("\nIs three less than or equal to 5?");
console.log(three <= five);
// greater than or equal to
console.log("\nIs five greater than or equal to two?");
console.log(five >= two);
// && and || operators
var userName = "omema00";
var pass = "crunchyroll";
// using && operator
console.log("\nAm I able to login?");
console.log(userName == "mustafa00" && pass == "crunchroll");
// using || operator
console.log("\nAm I able to login?");
console.log(userName == "mustafa00" || pass == "crunchyroll");
// test whether an item is in array
// making array
var fruits = ["Apple", "Mango", "Pear"];
console.log("\nIs Pear in fruits array?");
console.log(fruits.includes("Pear"));
// test whether an item is not in array
// making array
var veges = ["Potato", "Tomato", "Pea"];
console.log("\nIs cucumber in veges array?");
console.log(veges.includes("Cucumber"));
