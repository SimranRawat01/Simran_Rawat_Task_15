//Dummy Array
const numbers = [12, 45, 7, 23, 89, 34, 18, 5, 62]

// Find the maximum number in the array using Named function
function findMax(arr) {
  if (arr.length === 0) return null;
  return Math.max(...arr);  //spread operator 
}

//Calculate the sum of all elements in the array using an Anonymous Function
const calculateSum = function (arr) {
  return arr.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
};

// Count the number of odd numbers in an array using an Arrow Function
const countOddNumbers = (arr) => {
  return arr.filter((num) => Math.abs(num % 2) === 1).length;
};


console.log("Original Array:", numbers);

const maxNumber = findMax(numbers);
console.log("Maximum Number:", maxNumber);

const totalSum = calculateSum(numbers);
console.log("Total Sum of Elements:", totalSum);

const oddCount = countOddNumbers(numbers);
console.log("Count of Odd Numbers:", oddCount);