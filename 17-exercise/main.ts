// Creating a array for guest list
let GuestNames = ["Afnan", "Alihana", "Kulsoom",];

// making a veriable for those who is not coming
let NotComing = GuestNames[2];

// printing that guest name who is not coming
console.log(NotComing, "is not coming.");

// adding a new guest in array of guest list
GuestNames.splice(2, 3, "Dania");

// printing the invitation message 
GuestNames.forEach(guest => console.log(`Hello Dear ${guest}, would you like to dinner with me?`));

// printing message for bigger dinner table
console.log("Here is a good news, I found a bigger dinner table");

// adding a new guest at the starting of the guest list array
GuestNames.unshift("Manam")

// adding another guest at the end of the guest list array
GuestNames.push("Alisha");

// to find the middle of array 
let MiddleIndex:number = Math.floor(GuestNames.length /2);

// adding a new guest name in the middle of the array
GuestNames.splice(MiddleIndex, 0,"Zehra");

// printing new invitation message
GuestNames.forEach(guest => console.log(`Hello Dear ${guest},\n\n Would you like to dinner with me?\n`));


// primting a new message that i can invite only two people for dinner
console.log("Sorry, I just found out that our new dinner table won't arrive in time for the dinner. Unfortunately I can invite only two people for dinner.");

// removing guests one by one until only two guests left
while(GuestNames.length > 2){
    let removedGuests = GuestNames.pop();
    console.log(`Sorry ${removedGuests}, I can invite only two people to dinner with me.`);
}


// sending the invitation to each of the last two guests
GuestNames.forEach(TwoGuests => console.log(`Hey ${TwoGuests}, You are still invited.`));

// removing last two guests 
GuestNames.pop();
GuestNames.pop();

// printing empty list message
console.log(GuestNames, "Empty List");