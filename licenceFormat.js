// licence format XXXX-XXXX-XXXX-XXXX

function licenceFormat(str) {
  let formatStr = "";
  let c=0
  for (let i = 0; i < str.length; i++) {
    let r = /^[a-z]/.test(str[i]);
    if (r) {
        c++;
      let chr = str[i].toUpperCase();      
        formatStr += chr;      
    if ((c  % 4)==0 && i!=str.length-1) {
        formatStr += "-";
        console.log(i+"----->")
      }
    }  
  }
  console.log(formatStr)
}
licenceFormat("aa#dsfsa-ab-bbb");
