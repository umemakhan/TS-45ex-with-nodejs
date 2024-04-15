function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}

// making great magicians through .map()
// it will modify array

function make_great(magicians:string []){
    return magicians.map(name => `The Great ${name}`);
}

// magicians names
let magicians_names= ["David Blaine", "Chris Angel", "Shin Lim"];

// copy of original array through .slice() function
let magicians_names_copy = magicians_names.slice();

// modify the coppied array to include "The Great" with thier names
let great_magicians_copy = make_great(magicians_names_copy);

// showing both original and copied array

console.log("Original Array\n");
show_magicians(magicians_names);

console.log("\nCopied Array\n");
show_magicians(great_magicians_copy);

