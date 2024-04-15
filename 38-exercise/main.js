function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
// by default
describe_city("Lahore");
describe_city("Karachi");
// giving value
describe_city("Mexico City", "Mexico");
