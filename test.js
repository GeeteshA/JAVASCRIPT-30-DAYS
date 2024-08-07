// {
//     var message = "Geetesh"
//     alert(message)
// }
// alert(message)

// ========SCOPING IN FUNCTION 
// function sayHi(firstName, lastNmae) {
//     function getFullname() {
//         return firstName + " " + lastNmae;
//     }
//     alert("hello " + getFullname())
// }
// sayHi("Geetesh", "Aheriya")

// =========COUNTER SCOPING 
// function makeCounter(n){
//     let count = 0;
//     return function () {
//         return n + count++;
//     }
// }
// let counter = makeCounter(10);
// alert(counter())
// alert(counter())
// alert(counter())


// var expect = function(val){
//     let toBe = function(x) {
//         if ( x === val) return true;
//         throw new Error("Not equal");
//     }
//     let notToBe = function(x) {
//         if( x !== val) return true;
//         throw new Error("Equal");
//     }
//     return { toBe, notToBe }
// }

var createCounter = function(init) {
    let increment = function(init){
        return init++;
    }
    let decrement = function(init){
        return init--;
    }
    let reset = function(init){
        return init;
    }
    return {
        increment, decrement, reset
    }
};


const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4