function reverseString(str) {
  let str1 = "";
  let strArr = str.split(" ");
  for (let i = strArr.length - 1; i >= 0; --i) {
    str1 += strArr[i] + " ";
  }
  console.log(str1);
}
reverseString("I Love You Too");
