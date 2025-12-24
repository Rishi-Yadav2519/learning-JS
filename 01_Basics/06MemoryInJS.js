/*      JS variable or data types take 2 types of memory for storing values
First is Stack (Primitive Data Types)
Second is Heap (Non-Primitive Data type)   */

let name = "Rishi"
let nameTwo = name
nameTwo = "Yadav"

console.log(name);
console.log(nameTwo);
// Here we can see that the original value isn't changed even after linking them together as Heap memory only share a copy of value not the original refrence or the value itself.

let objOne = {
    studentName : "Rishi",
    studentAge : 24
}
let objTwo = objOne

objTwo.studentAge = 25;

console.log(objOne.studentAge);
console.log(objTwo.studentAge);
// Here we can see the value is updated as Heap Memory gives the refrence of value not copy of it. So when we update the refrence the original value is updated as well.