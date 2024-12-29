function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code herelet result = '';

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

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
