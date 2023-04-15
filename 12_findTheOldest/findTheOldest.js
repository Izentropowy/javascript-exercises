const findTheOldest = function(arr) {
    const oldest = arr.sort(function(a, b){
        if (!a.yearOfDeath){
            a.yearOfDeath = new Date().getFullYear();
        }
        if (!b.yearOfDeath){
            b.yearOfDeath = new Date().getFullYear();
        }
        const last = a.yearOfDeath - a.yearOfBirth;
        const next = b.yearOfDeath - b.yearOfBirth;
        return last > next ? -1 : 1
    })
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
