function per(str, s, l) {
  if (s == l) console.log("->" + str);
  else {
    for (let i = s; i <= l; i++) {
       
      str = swap(str, s, i);
      console.log(i+" ================" + str);
      per(str, s+1, l);
    }
  }
}
function swap(str, i, j) {
    console.log(i+"---"+j)
  let temp;
  let arr = str.split("");
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return (arr).join("");
}
let str = "ABC";
console.log(per(str, 0, str.length - 1));
