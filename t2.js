let n, number = 737, remainder, sum = 0;
n = number;

if (number > 0) {
    while (number > 0) {
        remainder = number % 10;
        sum = sum * 10 + remainder;
        number = parseInt(number / 10);
    }
    if (n == sum) {
        console.log("This number is palindrome");
    }
    else {
        console.log("This number is not palindrome");
    }

}
else {
    console.log("Choose a number greater than 0.");
}