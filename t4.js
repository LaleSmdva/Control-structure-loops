let month = "May";
switch (month) {
    case "December":
    case "January":
    case "February":
        console.log("WINTER");
        break;
    case "March":
    case "April":
    case "May":
        console.log("SPRING");
        break;
    case "June":
    case "July":
    case "August":
        console.log("SUMMER");
        break;
    case "September":
    case "October":
    case "November":
        console.log("AUTUMN");
        break;
    default:

        console.log("Invalid Month number");
        break;
}