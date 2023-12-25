//convert object to Array
let obj={"name":"Ram Das",roll:"A01","class":"V"}
let arr=Object.keys(obj).map(item=>[item,obj[item]])
console.log(arr)

// convert array to object
let arr1=[10,20,30,40]
let c=0
let obj1=Object.assign({},arr1)
console.log(obj1)
