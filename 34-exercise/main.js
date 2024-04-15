// storing pizzas in array
var pizzas = ["Margherita", "Pepperoni", "Paneer"];
// using for-loop
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var pizza = pizzas_1[_i];
    console.log("I like ".concat(pizza, " pizza"));
}
// adding a line outside the for-loop
console.log("Pizza is love <3");
