/*

> (Less than comparison)
>= (Less than or equal to comparison)
< (Greater than comparison)
<= (Greater than or equal to comparison)
== (Equals to )
=== (Equals to and type is equal as well) 
!= (Not equal to)
!== (strict not equal to)

*/

console.log(2 > 1); // Comparison returns value in boolean either true or false

// Always compare values of same type because different type of values converts automatically then sometimes show unexpected values.

console.log(null > 0); // Flase
console.log(null == 0); //Flase
console.log(null >= 0); //True