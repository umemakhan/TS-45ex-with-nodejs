var guestNames = ["Afnan", "Alihana", "Kulsoom",];
var notComing = guestNames[2];
console.log(notComing, "is not coming.");
guestNames.splice(2, 2, "Dania");
guestNames.forEach(function (guest) { return console.log("Hello Dear ".concat(guest, ", would you like to dinner with me?")); });
