function make_shirt(size: string= "Large" , message: string= "I love TypeScript"){
    console.log(`You selected a ${size} size shirt with  ${message} print on it`);
}

// large shirt with defult
make_shirt();

// medium with defult message
make_shirt("Medium");

// small with a different message
make_shirt("Small", "I am Pakistani");
