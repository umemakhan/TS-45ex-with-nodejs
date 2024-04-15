let guestNames = ["Afnan", "Alihana", "Kulsoom",];

let notComing = guestNames[2];

console.log(notComing, "is not coming.");

guestNames.splice(2, 3, "Dania");

guestNames.forEach(guest => console.log(`Hello Dear ${guest}, would you like to dinner with me?`));