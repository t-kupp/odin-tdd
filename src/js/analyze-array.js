function analyzeArray(arr) {
  if (!validArgument(arr)) {
    return "Invalid arguments.";
  }
  let object = {
    average: findAverage(arr),
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };

  return object;
}

function validArgument(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return false;
  return true;
}

function findAverage(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return Math.round(sum / arr.length);
}

export default analyzeArray;
