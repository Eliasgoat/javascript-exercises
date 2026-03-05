const sumAll = function(from, to) {
    if (typeof from !== 'number' || typeof to !== 'number' || from < 0 || to < 0 || !Number.isInteger(from) || !Number.isInteger(to)) {
        return 'ERROR';
    }
    let sum = 0
    const min = Math.min(from, to);
    const max = Math.max(from, to);
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
