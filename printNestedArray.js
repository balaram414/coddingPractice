// print nested array

let arr = [1, 2, [3, 4, [5], 6, [7, 8]]];
function printNestedArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      printNestedArray(arr[i]);
    } else {
      console.log(arr[i]);
    }
  }
}
printNestedArray(arr)
