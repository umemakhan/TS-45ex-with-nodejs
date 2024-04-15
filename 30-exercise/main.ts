let userNames = ["Mustafa", "Ashar", "Admin", "Haroon", "Shahmeer"];

userNames.forEach(userName => {
    if (userName == "Admin"){
        console.log(`Hello ${userName}, Would you like to see a status report?`);
    }
    else{
        console.log(`Hello ${userName}, Thank you for logging in again`);
    }
})