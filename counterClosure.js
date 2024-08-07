var createCounter = function(n) {
    let count = 0
    return function() {
        return n + count++;
    };
};
let counter = createCounter(10)
counter()
counter()
counter()