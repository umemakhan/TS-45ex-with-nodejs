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
// calling make_great function
var great_magicians = make_great(magicians_names);
// modified list
show_magicians(great_magicians);
