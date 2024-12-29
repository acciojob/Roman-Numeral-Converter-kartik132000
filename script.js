function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['CM', 900],
        2: ['D', 500],
        3: ['CD', 400],
        4: ['C', 100],
        5: ['XC', 90],
        6: ['L', 50],
        7: ['XL', 40],
        8: ['X', 10],
        9: ['IX', 9],
        10: ['V', 5],
        11: ['IV', 4],
        12: ['I', 1]
    };

    let result = '';

    // Iterate through the object to build the Roman numeral
    for (let i = 0; i < Object.keys(obj).length; i++) {
        const [roman, value] = obj[i];

        // Add the Roman numeral to the result as many times as the value fits into num
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }

    return result;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 14, uncomment the following line

console.log(convertToRoman(14)); // Should print XIV

// do not edit below this line
module.exports = convertToRoman;
