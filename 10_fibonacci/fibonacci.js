const fibonacci = function(num) {
    if (num < 1){
        return "OOPS";
    }
    let arr = [1, 1];
    for (let i = 2; i < num; i++){
        arr.push(arr[arr.length-1] + arr[arr.length-2]);
    }
    return arr[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
