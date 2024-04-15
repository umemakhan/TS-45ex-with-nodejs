var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// five places in the world i'd like to visit
// array is not in alphabetical order
var FivePlaces = ["Japan", "Bali", "Turkey", "Hong Kong", "Maldives"];
// printing the array in its original order
console.log("Original order:", FivePlaces);
// printing array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", __spreadArray([], FivePlaces, true).sort());
// printing that array is still in its original form
console.log("Still in its original order", FivePlaces);
// printing array in reversed order without modifying the actual list
console.log("Reversed order:", __spreadArray([], FivePlaces, true).reverse());
// printing that array is still in its original form
console.log("Still in its original order", FivePlaces);
// the actual order of list has changed in reversed order 
console.log("Reversed the original array:", FivePlaces.reverse());
// showing that array is back to its original order
console.log("Back to its original form:", FivePlaces.reverse());
// primting that the order of array has changed in alphabetical order
console.log("Sorted in alphabetical order:", FivePlaces.sort());
// printing that the order of array has changed in reversed order
console.log("Reversed the original array:", FivePlaces.reverse());
