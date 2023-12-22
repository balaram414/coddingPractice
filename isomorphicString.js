// s=papper, t=title , t and p there are 2 times,    a,e,r and i,l,e those are one time
// So those string are isomorphic

function isomorphic(str1, str2) {
  let obj1 = getObj(str1);
  let obj2 = getObj(str2);
  //   console.log(obj1);
  //   console.log(obj2);
  let objArr1 = [];
  let objArr2 = [];
  for (item in obj1) objArr1.push(obj1[item]);
  for (item in obj2) objArr2.push(obj2[item]);

  let flag = true;
  for (let i = 0; i < objArr2.length; i++)
    if (!objArr1.includes(objArr2[i])) flag = false;
  console.log("Is that string isomorphic: " + flag);
}

function getObj(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in obj) obj[str[i]] = obj[str[i]] + 1;
    else obj[str[i]] = 1;
  }
  return obj;
}
isomorphic("AZCXAZC", "ABCDABC");
