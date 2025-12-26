// When we are working with multiple level of condition checking we prefer switch case
switch (key) {
    case value:
        
        break;

    default:
        break;
}

const month = 10
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Default if nothing matched");
        break;
}
// Switch is basically another type of if else condition where we give the value in place of key and check it with the value from case and then do the work in between case and break, default is the case where nothing matched. Break is the point where if anything match then the switch case stopeed there and returned the value.