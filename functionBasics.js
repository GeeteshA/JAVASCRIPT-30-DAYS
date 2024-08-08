// Function Statement or Function Declratoin
// function ab(a){
//     console.log(a)
// }
// console.log(ab())

// Function Expression 
// var a = function(b){
//     console.log(b)
// }
// console.log(a)



// Callback function : = A function to be executed after another function has finished 

// setTimeout(function(){
//     console.log("timer")
// }, 4000)

// function x(y){
//     console.log("A function is running")
//     y();
// }

// x(function y(){
//     console.log("B function is running")
// })

function sum(a, b) {
    return a + b 
}
function mulTwo(val) {
    return val * 2
}
function square(val){
    return val * val
}

function addSquare(a,b){
    return square(sum(a,b))
}

// console.log(addSquare(4,2))
// function compose( f1, f2) {
//     return function(a,b){
//         return f2(f1(a,b))
//     }
// }
// const result = compose(sum, mulTwo)

const composeTwo = (f1, f2, f3) => (a,b) => f3(f2(f1(a,b)))

const result = composeTwo(sum, mulTwo, square)
console.log(result(4,5))

