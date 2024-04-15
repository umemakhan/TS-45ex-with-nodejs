// Creating a array for guest list
let guestNames = ["Afnan", "Alihana", "Kulsoom",];

// making a veriable for those who is not coming
let notComing = guestNames[2];

// printing that guest name who is not coming
console.log(notComing, "is not coming.");

// adding a new guest in array of guest list
guestNames.splice(2, 3, "Dania");

// printing the invitation message 
guestNames.forEach(guest => console.log(`Hello Dear ${guest}, would you like to dinner with me?`));

// printing message for bigger dinner table
console.log("Here is a good news, I found a bigger dinner table");

// adding a new guest at the starting of the guest list array
guestNames.unshift("Manam")

// adding another guest at the end of the guest list array
guestNames.push("Alisha");

// to find the middle of array 
let middleIndex:number = Math.floor(guestNames.length /2);

// adding a new guest name in the middle of the array
guestNames.splice(middleIndex, 0,"Zehra");

// printing new invitation message
guestNames.forEach(guest => console.log(`Hello Dear ${guest},\n\n Would you like to dinner with me?\n`));


