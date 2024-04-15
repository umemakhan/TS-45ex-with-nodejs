// making current users list
let current_users= ["Omaima", "Haroon", "Shahmeer", "Alia", "Asif"];

// making new users list
let new_users= ["Dania", "Kulsoom", "Afnan", "omaima", "Alihana"];

// loop through the new user list
new_users.forEach(new_user => {
    if(current_users.some(current_user => current_user.toLowerCase() === new_user.toLowerCase())){
        console.log(`Sorry ${new_user}, This username has already been used, You will need to enter a new username`);
    } else {console.log(`This username ${new_user} is available`);
}
})