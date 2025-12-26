/*

Javascript will split its work in multiple phases
1) Global Exectution Context
2) Function Execution Context

Each line of code in JS go through Global Execution Context and assigned a this to that function, object, array or whatever it is whether this is empty or contain whindow object no matter.

Now any function run through 2 phases: -
1) Memory Creation Phase / Creation Phase / Memory Phase
2) Execution Phase

let val1 = 10
let val2 = 5
function addNum (num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(20, 25)

If we take the above example we can get: -
1) Global execution context which is mandatory for all code
2) Memory creation phase: - 
    It cteates memory for all the variable -
        line 13) val1 = undefined
        line 14) val2 = undefined
        line 15) addNum = defination of function
        line 19) result1 = undefined
        line 20) result2 == undefined

This is called the first cycle which is going to happen always
3) Execution phase : -
    It gives the given values to our variables - 
        line 13) val1 = 10        
        line 14) val2 = 5        
        There is no use of defination again as it was defined earlier
        line 19) result1 = Now as this value depend on the function so again there is going to run a complete new memory creation phase and execution phase only for the function to get the value for result1
        line 20) result2 = Same new memory creation phase and execution phase is going to run again for getting the value for result2.


++++++++++++++++++++++++++++++++ Call Stack +++++++++++++++++++++++++++++++++++
A basic term for which function execute and give value first means end first. Generally if we call a function it start and end but is we call the function nested such as function 3 called inside function 2 and function 2 itself called inside function 1 then first funtion one is going to open then function to on it and then function three on noth of them, but here function three will close first as it comes at last and without its execution other two functions are incomplete, then same goes for function 2 and at last function one which opens first closes last.

This method is called LIFO - Last In First Out
*/