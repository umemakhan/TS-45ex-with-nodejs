function makeSandwich(...items:string[]){
    console.log("\nMaking a sandwich with the following items\n");

    items.forEach(item => console.log(item));

    console.log("\nNow enjoy your Sandwich");
}

// calling the function three times using a different number of arguments
makeSandwich("Bread", "Egg", "Mayo");

makeSandwich("Bread", "Cheese", "Chicken", "Tomato", "Onion", "Cabbage");

makeSandwich("Brown Bread", "Cheese", "Mayo", "Green Onion", "Paneer");