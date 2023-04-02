const removeFromArray = function(array, ...args) {
    for (let element of args){
        if (array.includes(element)){
            let index = array.indexOf(element);
            array.splice(index, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
