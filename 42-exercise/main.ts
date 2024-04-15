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

// calling make_great function
let great_magicians = make_great(magicians_names);

// modified list
show_magicians(great_magicians);