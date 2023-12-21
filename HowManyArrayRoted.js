// roted array arr=[1,2,3,4]  => 1) arr=[2,3,4,1]   => 2) arr=[3,4,1,2]  => 3) arr=[4,1,2,3]
//input: arr=[4,1,2,3]
//output: 3 times roted
arr = [4, 1, 2, 3];
function roted(arr) {
    let val=arr[0]
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
 console.log("Roted: "+arr.indexOf(val)+" Times")
}
roted(arr);
