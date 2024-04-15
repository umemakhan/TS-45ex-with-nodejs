var userNames = ["Mustafa", "Ashar", "Admin", "Haroon", "Shahmeer"];
userNames = [];
// checking is our array empty?
if (userNames.length === 0) {
    console.log("Your array is empty, we need to find some users.");
}
else {
    userNames.forEach(function (userName) {
        if (userName == "Admin") {
            console.log("Hello ".concat(userName, ", Would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(userName, ", Thank you for logging in again"));
        }
    });
}
