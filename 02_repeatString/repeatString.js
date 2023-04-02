const repeatString = function(text, n) {

    word = '';
    
    if (n < 0){
        return 'ERROR';
    }

    for(let i = 0; i < n; i++){
        word += text;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
