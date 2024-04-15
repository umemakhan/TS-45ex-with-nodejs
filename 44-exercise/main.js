function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items\n");
    items.forEach(function (item) { return console.log(item); });
    console.log("\nNow enjoy your Sandwich");
}
// calling the function three times using a different number of arguments
makeSandwich("Bread", "Egg", "Mayo");
makeSandwich("Bread", "Cheese", "Chicken", "Tomato", "Onion", "Cabbage");
makeSandwich("Brown Bread", "Cheese", "Mayo", "Green Onion", "Paneer");
