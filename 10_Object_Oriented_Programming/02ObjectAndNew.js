// Javascript is prototypial in behaviour, It goes from layer to layer for finding a value
const heroes = ["spiderman", 'hulk']
console.log(heroes);
// If we check this heroes log in browser coonsole we can get a prototype of array at first level, then it shows us another prototype of object as the actual parent or global scope is object in JavaScript. It gives us all the methods and keywords we can use on our array or object. Why we got objent prototype in an array, as we know JS is object oriented programmming so evertyhing in JS is object at last or inharited from an object even a function is also an object ehich behave as function.

// We know that we can use the prototypes which are basically pre-defined methods or function to do our work such as forEcah, length, map etc. and whatever be get varies by the type. we can check the available prototypes of anything in JavaScript in browser console refering the item and using .prototype method.

// We can create our own prototypes and use it such as 
function productPrice (name, price){
    this.name = name
    this.price = price
    // We have a simple function which take parameter and create object by the values
    // By default we get some prototypes for it as well
}

productPrice.prototype.increment = function(){
    this.price * 2
    // We created a prototype which increases the price key's value in the object created from productPrice by 2X.
}

productPrice.prototype.printValue = function(){
    console.log(`Price is ${this.price}`)
    // We created a prototype which log the price key's value of the object created from productPrice.
}
// Now we created 2 different prototypes for our main function and actually can use it as other prototypes.

const tea = new productPrice("Tea", 10);
const coffee = new productPrice("Coffee", 50);
// We have created 2 different variables with 2 different objects based on our structure we provided in function

tea.printValue()




// Refer to the chai or code file cause it's not working