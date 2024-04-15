function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You selected a ".concat(size, " size shirt with  ").concat(message, " print on it"));
}
// large shirt with defult
make_shirt();
// medium with defult message
make_shirt("Medium");
// small with a different message
make_shirt("Small", "I am Pakistani");
