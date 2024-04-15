var userNames = ["Mustafa", "Ashar", "Admin", "Haroon", "Shahmeer"];
userNames.forEach(function (userName) {
    if (userName == "Admin") {
        console.log("Hello ".concat(userName, ", Would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(userName, ", Thank you for logging in again"));
    }
});
