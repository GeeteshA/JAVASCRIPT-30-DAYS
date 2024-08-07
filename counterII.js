var createCounter = function(init) {
    let n = init
    let increment = function(){
        return ++n;
    }
    let decrement = function(){
        return --n;
    }
    let reset = function(){
        return n = init ;
    }
    return {
        increment, decrement, reset
    }
};
