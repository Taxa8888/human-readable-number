module.exports = function toReadable(number) {
    const read = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    }
    let arr = number.toString().split('');

    if (arr.length === 1 || (arr.length === 2 & number <= 19)) {
        return read[number];
    } else if (arr.length === 2) {
        if (number % 10 !== 0) {
            return `${read[arr[0] * 10]} ${read[arr[1]]}`
        } else { return `${read[arr[0] * 10]}` }
    } else if (arr.length === 3) {
        if (number % 100 === 0) {
            return `${read[number / 100]} hundred`
        } else if (number % 100 <= 19) {
            return `${read[Math.floor(number / 100)]} hundred ${read[number % 100]}`
        } else if (number % 10 === 0) {
            return `${read[Math.floor(number / 100)]} hundred ${read[number % 100]}`
        } else {
            return `${read[Math.floor(number / 100)]} hundred ${read[(number % 100) - (number % 10)]} ${read[number % 10]}`
        }
    }

}
