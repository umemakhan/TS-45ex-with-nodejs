// making current users list
var current_users = ["Omaima", "Haroon", "Shahmeer", "Alia", "Asif"];
// making new users list
var new_users = ["Dania", "Kulsoom", "Afnan", "omaima", "Alihana"];
// loop through the new user list
new_users.forEach(function (new_user) {
    if (current_users.some(function (current_user) { return current_user.toLowerCase() === new_user.toLowerCase(); })) {
        console.log("Sorry ".concat(new_user, ", This username has already been used, You will need to enter a new username"));
    }
    else {
        console.log("This username ".concat(new_user, " is available"));
    }
});
