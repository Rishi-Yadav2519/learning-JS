// Date in JS represents in milliseconds from January 1, 1970 UTC midnight. We can think of it as default date

const today = new Date()

console.log(today);
// We can get current date like this but it is in millisecond format and not readable properly

// (IMP date declared above is based on GMT 0000 universal time)

console.log(today.toString()); // We can convert our date to string to make it more readable

console.log(today.toDateString()); // Covert date in a string with only day and date

console.log(today.toISOString()); // Covert a date to millisecond format as we got by declaring date

console.log(today.toLocaleDateString()); // Covert the date to only date but in US Standard

console.log(today.toLocaleDateString("en-IN")); // Covert the date in Indian format

console.log(today.toLocaleTimeString()); // Take the time from the date

console.log(today.toUTCString()); // Display Day, Date and time in readable format according to GMT

// We can also get only hours, minutes, seconds, months etc. if we want according to the default date

// We can also declare a specific date
const myDate = new Date(2025, 9, 25) // We can also give time hours, minutes & seconds if we want just by separating with comma as in date
console.log(myDate);
console.log(myDate.toDateString());
// Month starts from 0 (as natural in JS) that's why we called 9 instea of 10 for october

const myAnotherDate = new Date("2025-10-25") // We can also declare date in any format we want using as string but if we are passing as string it can be normal month number not according to JS

let timeStamp = Date.now()
console.log(timeStamp); // We can get a timestamp in milliseconds from the default date which is useful during any quiz app type of things

// If we have to compare any specific date with current time or date than we have to convert the specific date in milliseconds as above like this: -
console.log(myDate.getTime()); // After this compare as we want

// We can convert these milliseconds in seconds, minutes etc by using basic maths and Math.floor like for second = millisecond/1000, for minutes = seconds/60 and so on


let newToday = today.toLocaleString("default", {
    weekday : "long",
    day : "2-digit",
});
console.log(newToday);
// We can coustomize our date display like this