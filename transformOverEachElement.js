// Apply Transform Over Each Element in Array
var map = function(arr, fn) {
    const output = [];
    for(let i = 0 ; i < arr.length ; i++) {
        output.push(fn(arr[i], i))
    }
    return output;
};