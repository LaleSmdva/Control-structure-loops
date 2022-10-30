let i, result = 0;
let num = 36;
if (num > 0) {
    for (i = 1; i <= num; i++) {

        if (num % i == 0) {
            result++;
        }
    }
    if (result == 2) {
        console.log("It is a prime number");
    }
    else {
        console.log("It is not a prime number");
    }

}
else {
    console.log("Enter a number greater than 0.");
}