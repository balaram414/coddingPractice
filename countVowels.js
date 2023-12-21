// count vowel and consonants from String
let arr = { vowel: 0, consonants: 0 };
let vowel = { a: true, e: true, i: true, o: true, u: true };
let str = "I would like to inform that I am balaram 'Mandal'";
let valCount=0;
let conCount=0;
for (let i = 0; i < str.length; i++) {
  let val = str[i].toLocaleLowerCase();
  let r = /^[a-zA-Z]+$/.test(str[i]);
  if (val in vowel)valCount++;
  else if(r)conCount++;
}
console.log("vowel: "+valCount)
console.log("consonants: "+conCount)
