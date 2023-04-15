const palindromes = function (word) {
    word = word.replace(/\W+/g, '').trim().toUpperCase();
    let splitted = word.split("");
    let reversed = splitted.reverse();
    let reversedJoined = reversed.join("");
    return reversedJoined === word;
};

// Do not edit below this line
module.exports = palindromes;
