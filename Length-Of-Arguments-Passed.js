//LeetcodeChallenge: Write a function argumentsLength that returns the count of arguments passed to it.

var argumentsLength = function(...args) {
    let count = 0;
    args.forEach((el) => {
        count += 1;
    })
    return count;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
