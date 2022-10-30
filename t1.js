let number = 16;
if (number > 0) {
    while (number % 2 == 0) {
        number = number / 2;
    }
    if (number == 1) {
        console.log("It is a power of 2");
    }
    else {
        console.log("It is not a power of 2");

    }
}


else {
    console.log("Enter a number greater than 0 ");
}