// Creating a array for guest list
var guestNames = ["Afnan", "Alihana", "Kulsoom",];
// making a veriable for those who is not coming
var notComing = guestNames[2];
// printing that guest name who is not coming
console.log(notComing, "is not coming.");
// adding a new guest in array of guest list
guestNames.splice(2, 3, "Dania");
// printing the invitation message 
guestNames.forEach(function (guest) { return console.log("Hello Dear ".concat(guest, ", would you like to dinner with me?")); });
// printing message for bigger dinner table
console.log("Here is a good news, I found a bigger dinner table");
// adding a new guest at the starting of the guest list array
guestNames.unshift("Manam");
// adding another guest at the end of the guest list array
guestNames.push("Alisha");
// to find the middle of array 
var middleIndex = Math.floor(guestNames.length / 2);
// adding a new guest name in the middle of the array
guestNames.splice(middleIndex, 0, "Zehra");
// printing new invitation message
guestNames.forEach(function (guest) { return console.log("Hello Dear ".concat(guest, ",\n\n Would you like to dinner with me?\n")); });
// primting a new message that i can invite only two people for dinner
console.log("Sorry, I just found out that our new dinner table won't arrive in time for the dinner. Unfortunately I can invite only two people for dinner.");
// removing guests one by one until only two guests left
while (guestNames.length > 2) {
    var removedGuests = guestNames.pop();
    console.log("Sorry ".concat(removedGuests, ", I can invite only two people to dinner with me."));
}
// sending the invitation to each of the last two guests
guestNames.forEach(function (TwoGuests) { return console.log("Hey ".concat(TwoGuests, ", You are still invited.")); });
// removing last two guests 
guestNames.pop();
guestNames.pop();
// printing empty list message
console.log(guestNames, "Empty List");
