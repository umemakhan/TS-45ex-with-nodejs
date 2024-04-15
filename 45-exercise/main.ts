function create_car(manufacturer, model, ...options){
    let car= {
        manufacturer: manufacturer,
        model: model,
    };

    // additional options to the car object
    options.forEach(option => {
        let [key,value] = option.split(":");
        car [key.trim()] = value.trim();
    });

    return car;

}

// calling the function
let firstCar= create_car("Toyota", "Supra MK4", "Sunroof: True", "Color: White", "Year: 1993");

console.log(firstCar);