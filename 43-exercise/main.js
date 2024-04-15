function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// making great magicians through .map()
// it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// magicians names
var magicians_names = ["David Blaine", "Chris Angel", "Shin Lim"];
// copy of original array through .slice() function
var magicians_names_copy = magicians_names.slice();
// modify the coppied array to include "The Great" with thier names
var great_magicians_copy = make_great(magicians_names_copy);
// showing both original and copied array
console.log("Original Array\n");
show_magicians(magicians_names);
console.log("\nCopied Array\n");
show_magicians(great_magicians_copy);
