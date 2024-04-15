function describe_city (city:string, country:string= "Pakistan"){
    console.log(`${city} is in ${country}`);
}

// by default
describe_city("Lahore");

describe_city("Karachi");

// giving value
describe_city("Mexico City", "Mexico");